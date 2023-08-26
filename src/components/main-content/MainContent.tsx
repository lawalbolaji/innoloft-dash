import { MainContentBody } from "./body/MainContentView";
import { MainContentHeader } from "./header/MainContentHeader";

export function MainContent({ isView }: { isView: boolean }) {
    return (
        <div className="flex-auto py-4 px-2 h-full">
            <div className="flex flex-col gap-y-4 h-full w-full md:w-[85%] overflow-auto hide-scroll">
                <div className="sticky top-0 bg-[#F9FAFB]">
                    <MainContentHeader
                        paths={[
                            { label: "Products", url: "#" },
                            { label: "Intelligent Finite Elements in Structural mechanics (View)", url: "#" },
                        ]}
                    />
                </div>

                <MainContentBody isView={isView} />
            </div>
        </div>
    );
}
