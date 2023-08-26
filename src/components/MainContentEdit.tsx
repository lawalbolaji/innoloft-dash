export function MainContentEdit() {
    return (
        <>
            <div className="h-[40%] bg-white">
                <div>
                    <ProductEdit />
                </div>
            </div>
            <div className="h-[35%] bg-white">
                <div>
                    <VideoEdit />
                </div>
            </div>
            <div className="h-[15%] bg-white">
                <div>
                    <OfferEdit />
                </div>
            </div>
        </>
    );
}

export function ProductEdit() {
    return <div>Edit Product</div>;
}

export function VideoEdit() {
    return <div>Edit Video Url</div>;
}

export function OfferEdit() {
    return <div>Edit Offer Details</div>;
}
