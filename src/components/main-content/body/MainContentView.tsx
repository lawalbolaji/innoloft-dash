import { OfferEdit, ProductEdit, VideoEdit } from "../../MainContentEdit";
import { OfferView } from "./OfferView";
import { ProductView } from "./ProductView";
import { VideoView } from "./VideoView";

const productViewProps = {
    title: "Some long descriptive header",
    description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    mainImageUrl: "https://placehold.co/500x300",
    profileImageUrl:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    address: {
        line1: "Jülicher Straße 72a",
        line2: "52070 Aachen, Germany",
    },
};

export function MainContentBody({ isView }: { isView: boolean }) {
    return (
        <>
            <div className="bg-white">
                <div className="h-full shadow-md">
                    {isView ? <ProductView {...productViewProps} /> : <ProductEdit />}
                </div>
            </div>
            <div className="w-full bg-white">
                <div className="shadow-md">
                    {isView ? <VideoView videoUrl="https://www.youtube.com/watch?v=9x7hZmHlpto" /> : <VideoEdit />}
                </div>
            </div>
            <div className="bg-white">
                <div className="h-full shadow-md">
                    {isView ? (
                        <OfferView trl={{ id: 9, label: "Actual System Proven in Operational Environment" }} />
                    ) : (
                        <OfferEdit />
                    )}
                </div>
            </div>
        </>
    );
}
