import { NavBar } from "../Navbar";
import { Profile } from "../profile/Profile";

export function SceneBuilder({ scene }: { scene: JSX.Element }) {
    return (
        <div className="h-screen w-screen min-w-fit bg-[#F9FAFB]">
            <NavBar />
            <div className="container m-auto flex flex-row w-full" style={{ height: "calc(100% - 55px)" }}>
                <Profile />

                {/* <RouterProvider /> */}
                {scene}
            </div>
        </div>
    );
}
