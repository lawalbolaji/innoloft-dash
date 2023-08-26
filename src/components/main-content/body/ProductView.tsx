import { ProfileHero } from "../../profile/ProfileHero";
import { InnoloftIconPrimary } from "../../shared/icons/InnoloftIconPrimary";
import { LocationIcon } from "../../shared/icons/LocationIcon";

type ProductViewProps = {
    title: string;
    description: string; // html formatted
    mainImageUrl: string;
    profileImageUrl: string;
    address: {
        line1: string;
        line2: string;
    };
};

export function ProductView({ title, description, mainImageUrl, profileImageUrl, address }: ProductViewProps) {
    return (
        <div className="w-full">
            <div className="flex flex-row flex-wrap md:flex-nowrap">
                <div className="w-full md:w-[500px]">
                    <div className="flex flex-col bg-white md:border-r">
                        <div className="w-full min-h-[300px]">
                            <img className="w-full min-h-full" src={mainImageUrl} alt="product image" />
                        </div>
                        <div className="p-4 box-border h-[40%] overflow-hidden">
                            <h3 className="font-medium text-black h-[20%]">{title}</h3>
                            <p className="text-xs pt-1 text-gray-800 dark:text-gray-400 h-[80%] line-clamp-4 text-ellipsis leading-5">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="md:flex-auto md:text-xs">
                    <div className="px-[5%]">
                        <div className="pt-2 pb-1 text-sm">Offered By</div>
                        <div className="pb-2">
                            <div>
                                <InnoloftIconPrimary />
                            </div>
                        </div>
                        <div className="py-2">
                            <ProfileHero name="Rasheed Lawal" company="Innoloft Gmbh" imageUrl={profileImageUrl} />
                        </div>
                        <div>
                            <div className="flex flex-row gap-2 py-2">
                                <div>
                                    <LocationIcon />
                                </div>
                                <div className="">
                                    {address.line1}, <br /> {address.line2}
                                </div>
                            </div>
                        </div>
                        <div>
                            <img className="w-full max-h-full" src="https://placehold.co/300x200" alt="Map" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
