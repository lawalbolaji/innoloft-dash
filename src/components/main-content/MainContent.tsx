import { MainContentBody } from "./body/MainContentBody";
import { MainContentHeader } from "./header/MainContentHeader";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { ErrorComponent } from "../errors/Error";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

type Mode = "edit" | "view";
function isModeType(x: string): x is Mode {
    return x === "edit" || x === "view";
}

function getModeFromUrlPath(pathName: string) {
    // we know url will be /:productId/:mode, or else it won't match this path
    return pathName.slice(pathName.lastIndexOf("/") + 1, pathName.length).toLowerCase();
}

export function MainContent({ productId }: { productId: number }) {
    const { pathname } = useLocation();
    const urlMode = getModeFromUrlPath(pathname);
    const mode = isModeType(urlMode) ? urlMode : "view";

    // loading state, product-details
    const loadingState = useSelector((state: RootState) => state.product.status);
    const productDetails = useSelector((state: RootState) => state.product.entity);
    const pageMap: Record<Mode[number], JSX.Element> = {
        loading: (
            <SkeletonTheme baseColor="#fff" highlightColor="#c0c0c0">
                <p className="w-full">
                    <Skeleton count={20} className="h-[40px]" />
                </p>
            </SkeletonTheme>
        ),
        success: (
            <div className="flex-auto py-4 px-2 h-full">
                <div className="flex flex-col gap-y-4 h-full w-full overflow-auto hide-scroll">
                    <div className="sticky z-50 top-0 bg-[#F9FAFB]">
                        <MainContentHeader
                            paths={[
                                { label: "Products", url: "/" },
                                {
                                    label:
                                        mode === "view"
                                            ? `${productDetails?.name} (View)`
                                            : `${productDetails?.name} (Edit)`,
                                    url: "#",
                                },
                            ]}
                            callToActionLabel={mode === "view" ? "Edit" : "View Offer"}
                            toUrl={mode === "view" ? `../${productId}/Edit` : `../${productId}/view`}
                        />
                    </div>

                    <MainContentBody isView={mode === "view"} productDetails={productDetails!} />
                </div>
            </div>
        ),
        Error: <ErrorComponent is404={false} />,
    };

    return pageMap[loadingState];
}
