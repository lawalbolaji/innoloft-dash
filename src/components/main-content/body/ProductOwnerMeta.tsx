import { Product } from "../../../scenes/Product.slice";
import { ProfileHero } from "../../profile/ProfileHero";
import { InnoloftIconPrimary } from "../../shared/icons/InnoloftIconPrimary";
import { LocationIcon } from "../../shared/icons/LocationIcon";

export function ProductOwnerMeta({
    profileImageUrl,
    address,
}: {
    profileImageUrl: string;
    address: Product["company"]["address"];
}) {
    return (
        <div className="md:flex-auto md:text-xs md:w-auto w-full pb-4 md:pb-0">
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
                    <div className="flex flex-row gap-2 py-4">
                        <div>
                            <LocationIcon />
                        </div>
                        <div className="">
                            {`${address.street} ${address.house},`} <br />{" "}
                            {`${address.zipCode} ${address.city.name}, ${address.country.name}`}
                        </div>
                    </div>
                </div>
                <div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2522.775648019185!2d6.097792076975096!3d50.77973236359988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTDCsDQ2JzQ3LjAiTiA2wrAwNicwMS4zIkU!5e0!3m2!1sen!2sng!4v1693259557258!5m2!1sen!2sng"
                        className="border-0 w-full max-h-full"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
