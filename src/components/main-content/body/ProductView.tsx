import { Product } from "../../../scenes/Product.slice";
import { ProductEdit } from "./ProductEdit";
import { ProductOwnerMeta } from "./ProductOwnerMeta";

export type ProductViewProps = {
    productDetails: Product;
    isView: boolean; // are we viewing or editing product
};

const description =
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";

export function ProductView({ productDetails, isView }: ProductViewProps) {
    return (
        <div className="w-full">
            <div className="flex flex-row flex-wrap md:flex-nowrap">
                <div className="w-full md:w-[500px]">
                    <div className="flex flex-col gap-y-2 bg-white md:border-r">
                        <div className="w-full min-h-[300px]">
                            <img
                                className="object-contain w-full min-h-full"
                                src={productDetails.picture}
                                alt="product image"
                            />
                        </div>
                        {isView ? (
                            <div className="p-4 box-border h-[40%] overflow-hidden">
                                <h3 className="font-medium text-black h-[20%]">{productDetails.name}</h3>
                                <p className="text-xs pt-1 text-gray-800 dark:text-gray-400 h-[80%] line-clamp-4 text-ellipsis leading-5">
                                    {description}
                                </p>
                            </div>
                        ) : (
                            <ProductEdit />
                        )}
                    </div>
                </div>
                <ProductOwnerMeta
                    profileImageUrl={productDetails.user.profilePicture}
                    address={productDetails.company.address}
                />
            </div>
        </div>
    );
}
