import { useParams } from "react-router-dom";
import { MainContent } from "../components/main-content/MainContent";
import { useEffect } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export function useProductDetails() {
    const { productId } = useParams<"productId">();

    if (productId === undefined) {
        // delegate to route error handler
        throw new Error("invalid url path");
    }

    useEffect(() => {
        // load product info
        console.log({ productId });
    }, [productId]);

    return { productId, productName: "Intelligent Finite Elements in Structural mechanics" };
}

export function ProductViewScene() {
    const { productId, productName } = useProductDetails();

    return <MainContent isView={true} productName={productName} productId={+productId} />;
}
