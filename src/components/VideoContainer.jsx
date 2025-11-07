import VideoCard from "./VideoCard";
import useFetchApi from "../hooks/usefetchApi";// Import our new hook
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import { Link } from "react-router"; // Make sure this is from "react-router-dom"

const VideoContainer = () => {
  // Use the hook to get data, loading, and error states
  const { data: videoData, loading, error } = useFetchApi(YOUTUBE_VIDEOS_API);

  // State 1: Loading
  if (loading) {
    return (
      <div className="flex flex-wrap justify-around">
        {/* You can create a Shimmer-style loading card */}
        <p className="text-center w-full mt-10">Loading videos...</p>
      </div>
    );
  }

  // State 2: Error
  if (error) {
    return (
      <div className="flex flex-wrap justify-around">
        <p className="text-center w-full mt-10 text-red-500">
          Failed to load videos. Please try again later. ({error})
        </p>
      </div>
    );
  }

  // State 3: Success
  return (
    <div className="flex flex-wrap justify-center gap-6 p-4">
      {/* Use optional chaining in case items is empty */}
      {videoData?.items.map((item) => {
        return (
          // The key should be on the outermost element
          <Link to={`/watch/${item.id}`} key={item.id}>
            <VideoCard data={item} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;