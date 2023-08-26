export function VideoView({ videoUrl }: { videoUrl: string }) {
    return (
        <div className="w-full">
            <div className="w-full">
                <div className="py-3 px-3">Video</div>
                <div className="py-4 flex flex-row w-full items-center justify-center">
                    <video className="h-96 w-[75%]" controls>
                        <source src={videoUrl} type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    );
}
