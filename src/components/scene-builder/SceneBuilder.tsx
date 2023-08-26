import { NavBar } from "../Navbar";
import { Profile } from "../profile/Profile";

export function SceneBuilder({ scene }: { scene: JSX.Element }) {
    return (
        <div className="h-screen">
            <NavBar />
            <div className="flex flex-row w-full bg-[#F9FAFB]" style={{ height: "calc(100% - 55px)" }}>
                <Profile />
                {scene}
            </div>
        </div>
    );
}
