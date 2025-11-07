import VideoCard from "./VideoCard";
import data from "../utils/mockData";
import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import { Link } from "react-router";

const VideoContainer = () => {
  const [videoData, setVideoData] = useState(data);

  useEffect(() => {
    const fetchHomePageData = async () => {
      const data = await fetch(YOUTUBE_VIDEOS_API);
      const json = await data.json();
      setVideoData(json);
    };

    fetchHomePageData();
  }, []);   

  return (
    <div className="flex flex-wrap justify-around">
      {videoData.items.map((item) => {
        return (
          <div key={item.id}>
            <Link to={`/watch/${item.id}`}>
              <VideoCard data={item} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default VideoContainer;
