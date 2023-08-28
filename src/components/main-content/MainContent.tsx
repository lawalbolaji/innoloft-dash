import { MainContentBody } from "./body/MainContentBody";
import { MainContentHeader } from "./header/MainContentHeader";

export function MainContent({
    isView,
    productName,
    productId,
}: {
    isView: boolean;
    productName: string;
    productId: number;
}) {
    return (
        <div className="flex-auto py-4 px-2 h-full">
            <div className="flex flex-col gap-y-4 h-full w-full overflow-auto hide-scroll">
                <div className="sticky z-50 top-0 bg-[#F9FAFB]">
                    <MainContentHeader
                        paths={[
                            { label: "Products", url: "/" },
                            {
                                label: isView ? `${productName} (View)` : `${productName} (Edit)`,
                                url: "#",
                            },
                        ]}
                        callToActionLabel={isView ? "Edit" : "View Offer"}
                        toUrl={isView ? `../${productId}/Edit` : `../${productId}/view`}
                    />
                </div>

                <MainContentBody isView={isView} />
            </div>
        </div>
    );
}
