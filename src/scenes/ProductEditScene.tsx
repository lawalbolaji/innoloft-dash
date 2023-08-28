import { MainContent } from "../components/main-content/MainContent";
import { useProductDetails } from "./ProductViewScene";

export function ProductEditScene() {
    const { productId, productName } = useProductDetails();

    return <MainContent isView={false} productName={productName} productId={+productId} />;
}
