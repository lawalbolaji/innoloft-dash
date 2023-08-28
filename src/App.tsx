import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { NavBar } from "./components/Navbar";
import { Profile } from "./components/profile/Profile";
import { ProductViewScene } from "./scenes/ProductViewScene";
import { ProductListScene } from "./scenes/ProductListScene";
import { ProductEditScene } from "./scenes/ProductEditScene";
import { Error404 } from "./components/errors/Error404";

// this is where router will earn its money
const router = createBrowserRouter([
    {
        path: "/",
        element: <ProductListScene />,
        errorElement: <Error404 />,
    },
    {
        path: "/:productId/view",
        element: <ProductViewScene />,
        errorElement: <Error404 />,
    },
    {
        path: "/:productId/Edit",
        element: <ProductEditScene />,
        errorElement: <Error404 />,
    },
]);

function App() {
    return (
        <div className="h-screen w-screen min-w-fit bg-[#F9FAFB]">
            <NavBar />
            <div className="container m-auto flex flex-row w-full" style={{ height: "calc(100% - 55px)" }}>
                <Profile />
                <RouterProvider router={router} />
            </div>
        </div>
    );
}

export default App;
