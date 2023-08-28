import { VideoEdit } from "./VideoEdit";

export function VideoView({ videoUrl, isView }: { videoUrl: string; isView: boolean }) {
    return (
        <div className="w-full">
            <div className="w-full">
                <div className="py-3 px-3">Video</div>
                {isView ? (
                    <div className="py-4 flex flex-row w-full items-center justify-center">
                        <video className="h-96 w-[75%]" controls>
                            <source src={videoUrl} type="video/mp4" />
                        </video>
                    </div>
                ) : (
                    <VideoEdit />
                )}
            </div>
        </div>
    );
}
