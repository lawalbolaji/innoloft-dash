import { ProfileHero } from "../../profile/ProfileHero";
import { InnoloftIconPrimary } from "../../shared/icons/InnoloftIconPrimary";
import { LocationIcon } from "../../shared/icons/LocationIcon";
import { ProductViewProps } from "./ProductView";

export function ProductOwnerMeta({
    profileImageUrl,
    address,
}: {
    profileImageUrl: string;
    address: ProductViewProps["address"];
}) {
    return (
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
    );
}
