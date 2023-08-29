import { useSelector } from "react-redux";
import { Product } from "../../../scenes/Product.slice";
import { DeleteIcon } from "../../shared/icons/DeleteIcon";
import { RibbonIcon } from "../../shared/icons/RibbonIcon";
import { ProductEdit } from "./ProductEdit";
import { ProductOwnerMeta } from "./ProductOwnerMeta";
import { RootState } from "../../../store";

export type ProductViewProps = {
    productDetails: Product;
    isView: boolean; // are we viewing or editing product
};

const description =
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";

export function ProductView({ productDetails, isView }: ProductViewProps) {
    const { hasUserSection } = useSelector((state: RootState) => state.configs.entity);

    return (
        <div className="w-full">
            <div className="flex flex-row flex-wrap md:flex-nowrap">
                <div className="w-full md:min-w-[460px]">
                    <div className="flex flex-col gap-y-2 bg-white">
                        <div className="w-full min-h-[300px] relative border-b">
                            <div className="absolute top-0 left-0 h-[40px] z-10">
                                <div className="flex flex-row h-full w-fit border border-t-0 border-l-0 rounded-br-lg">
                                    <div className="bg-[#272E71] w-[40px] h-full flex flex-col justify-center border-r rounded-br-lg">
                                        <div className="m-auto w-[14px] h-[16px]">
                                            <RibbonIcon />
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center bg-white">
                                        <div className="py-2 px-4">Patent</div>
                                    </div>
                                </div>
                            </div>
                            {!isView && (
                                <div className="absolute z-10 top-0 right-0 h-[40px] w-[40px] border-l border-b rounded-bl-lg">
                                    <div className="flex flex-col justify-center h-full">
                                        <div className="bg-white w-[16px] h-[16px] m-auto">
                                            <DeleteIcon />
                                        </div>
                                    </div>
                                </div>
                            )}
                            <img
                                className="object-contain w-full max-h-[300px]"
                                src={productDetails.picture}
                                alt="product image"
                            />
                        </div>
                        {isView ? (
                            <div className="p-4 box-border h-[40%] overflow-hidden">
                                <h3 className="font-medium text-black h-[20%]">{productDetails.name}</h3>
                                <p className="text-xs pt-1 text-gray-800 dark:text-gray-400 h-[80%] line-clamp-4 text-ellipsis leading-5">
                                    {/* TODO: replace this with editor instance to render rich text product description */}
                                    {description}
                                </p>
                            </div>
                        ) : (
                            <ProductEdit />
                        )}
                    </div>
                </div>
                {hasUserSection && (
                    <ProductOwnerMeta
                        profileImageUrl={productDetails.user.profilePicture}
                        address={productDetails.company.address}
                        companyName={productDetails.company.name}
                        companyLogoUrl={productDetails.company.logo}
                        userFirstName={productDetails.user.firstName}
                        userLastName={productDetails.user.lastName}
                    />
                )}
            </div>
        </div>
    );
}
