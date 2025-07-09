import type { FC } from "react";
import type { IVideo } from "@/models/IVideoResponse";

interface ReelProps {
  video: IVideo;
}

const Reel: FC<ReelProps> = ({ video }) => {
  return (
    <>
      <div>
        <video
          src={video.video_files[0].link}
          playsInline
          className="w-full h-full object-cover"
        ></video>
      </div>
    </>
  );
};

export default Reel;
