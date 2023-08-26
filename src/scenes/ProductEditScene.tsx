import { MainContent } from "../components/main-content/MainContent";
import { SceneBuilder } from "../components/scene-builder/SceneBuilder";

export function ProductEditScene() {
    return <SceneBuilder scene={<MainContent isView={false} />} />;
}
