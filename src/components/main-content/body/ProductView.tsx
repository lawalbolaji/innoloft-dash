import { ProductEdit } from "./ProductEdit";
import { ProductOwnerMeta } from "./ProductOwnerMeta";

export type ProductViewProps = {
    title: string;
    description: string; // html formatted
    mainImageUrl: string;
    profileImageUrl: string;
    address: {
        line1: string;
        line2: string;
    };
    isView: boolean; // are we viewing or editing product
};

export function ProductView({ title, description, mainImageUrl, profileImageUrl, address, isView }: ProductViewProps) {
    return (
        <div className="w-full">
            <div className="flex flex-row flex-wrap md:flex-nowrap">
                <div className="w-full md:w-[500px]">
                    <div className="flex flex-col gap-y-2 bg-white md:border-r">
                        <div className="w-full min-h-[300px]">
                            <img className="w-full min-h-full" src={mainImageUrl} alt="product image" />
                        </div>
                        {isView ? (
                            <div className="p-4 box-border h-[40%] overflow-hidden">
                                <h3 className="font-medium text-black h-[20%]">{title}</h3>
                                <p className="text-xs pt-1 text-gray-800 dark:text-gray-400 h-[80%] line-clamp-4 text-ellipsis leading-5">
                                    {description}
                                </p>
                            </div>
                        ) : (
                            <ProductEdit />
                        )}
                    </div>
                </div>
                <ProductOwnerMeta profileImageUrl={profileImageUrl} address={address} />
            </div>
        </div>
    );
}
