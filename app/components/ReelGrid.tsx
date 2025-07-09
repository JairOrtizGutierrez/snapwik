import { useEffect, useState } from "react";
import type { IVideo, IVideoResponse } from "@/models/IVideoResponse";
import { fetchData } from "@/utils/fetchData";
import Reel from "./Reel";

const ReelGrid = () => {
  const [videos, setVideos] = useState<IVideo[]>([]);

  useEffect(() => {
    const init = async () => {
      const { videos } = await fetchData<IVideoResponse>(
        "https://api.pexels.com/videos/search?query=travel&per_page=10&orientation=portrait",
      );

      setVideos(videos);
    };

    init();
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-4 gap-6">
        {videos.length
          ? videos.map((video) => <Reel key={video.id} video={video} />)
          : "Loading"}
      </div>
    </div>
  );
};

export default ReelGrid;
