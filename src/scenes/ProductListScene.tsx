import { NavLink } from "react-router-dom";
import { MainContentHeader } from "../components/main-content/header/MainContentHeader";

type User = {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    sex: 0 | 1;
    profilePicture: string;
    position: string;
};

type Company = {
    name: string;
    logo: string;
    address: {
        country: {
            name: string;
        };
        city: {
            name: string;
        };
        street: string;
        house: string;
        zipCode: string;
        longitude: string;
        latitude: string;
    };
};

type Product = {
    id: number;
    name: string;
    description: string;
    picture: string;
    type: { id: number; name: string };
    categories: Array<{ id: number; name: string }>;
    implementationEffortText: string | null;
    investmentEffort: string;
    trl: { id: number; name: string };
    video: string;
    user: User;
    company: Company;
    businessModels: Array<{ id: number; name: string }>;
};

const products: Array<Product> = [
    {
        id: 6781,
        name: "LoftOS",
        description:
            '<img style="height: 0px" src=a onerror=console.log("secret-cookie-value")>Innoloft <b>creates</b> <script type="text/javascript">console.log("test");</script>the leading B2B tech ecosystem through interconnected research & business networks and marketplaces. With our digital platform technology, we are changing the way business contacts are initiated between economic and innovation actors.\n\nOur unique software-as-a-service (SaaS) solution LoftOS digitizes services provided by governments and public economic agencies, clusters and hubs, as well as event organizers and trade shows. Not only can our LoftOS customers implement their digitization strategy in a matter of months - each platform can also be connected through our system and its data standard. Through this connection, Innoloft and its partners are creating the largest B2B tech ecosystem in the world.\nCompanies, startups, research institutes and other business players use the ecosystem for lead generation, innovation scouting, procurement or partner acquisition.\n',
        picture: "https://img.innoloft.com/products/product_783016a3.png",
        type: {
            id: 2,
            name: "Software",
        },
        categories: [
            {
                id: 5101,
                name: "IT platforms",
            },
            {
                id: 5100,
                name: "B2B marketplaces",
            },
        ],
        implementationEffortText: null,
        investmentEffort: "< 25.000€",
        trl: {
            id: 9,
            name: "TRL 9 – Actual system proven in operational environment (established product available)",
        },
        video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        user: {
            id: 284,
            email: "example@innoloft.com",
            firstName: "Christopher",
            lastName: "Stirner",
            sex: 1,
            profilePicture: "https://img.innoloft.com/users/user_8d48197d.png",
            position: "Chief Strategy Officer",
        },
        company: {
            name: "Innoloft GmbH",
            logo: "https://img.innoloft.com/logos/unt_7838d306.png",
            address: {
                country: {
                    name: "Germany",
                },
                city: {
                    name: "Aachen",
                },
                street: "Jülicher Straße",
                house: "72a",
                zipCode: "52070",
                longitude: "6.100367",
                latitude: "50.779729",
            },
        },
        businessModels: [
            {
                id: 65,
                name: "Pay-Per-Use",
            },
            {
                id: 1155,
                name: "Subscription",
            },
            {
                id: 374,
                name: "White-Label",
            },
            {
                id: 66,
                name: "Peer-to-Peer (P2P)",
            },
        ],
    },
];

export function ProductListScene() {
    return (
        <div>
            <div className="flex-auto py-4 px-2 h-full">
                <div className="flex flex-col gap-y-4 h-full w-full overflow-auto hide-scroll">
                    <div className="sticky z-50 top-0 bg-[#F9FAFB]">
                        <MainContentHeader paths={[{ label: "Products", url: "/" }]} />
                    </div>

                    <div className="p-4">
                        <div className="flex flex-col gap-y-2">
                            {products.map((product) => (
                                <div key={product.id}>
                                    <NavLink
                                        to={`${product.id}/view`}
                                        className={({ isActive, isPending }) =>
                                            isActive ? "active-link" : isPending ? "pending-link" : ""
                                        }
                                    >
                                        {product.name}
                                    </NavLink>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
