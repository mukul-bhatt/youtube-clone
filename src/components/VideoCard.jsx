import { formatViewCount, formatTimeAgo } from "../utils/helpers"; // Import our new helpers

const VideoCard = ({ data }) => {
  const { title, channelTitle, thumbnails, publishedAt } = data.snippet;
  const { viewCount } = data.statistics;
  const { url, width, height } = thumbnails.high;

  return (
    // Use `w-full` for responsiveness and set max-width
    <div className="card w-full max-w-sm bg-base-100 shadow-sm transition-transform duration-200 hover:scale-105">
      <figure className="px-5 pt-5"> {/* Slightly less padding */}
        <img
          width={width}
          height={height}
          src={url}
          alt={title}
          className="rounded-xl"
        />
      </figure>
      {/* Changed to items-start for left-alignment */}
      <div className="card-body items-start p-5">
        {/* Added line-clamp to truncate long titles */}
        <h2 className="card-title line-clamp-2 h-14 font-semibold">
          {title}
        </h2>
        {/* Added text-gray-500 for secondary info */}
        <p className="text-gray-500">{channelTitle}</p>
        <p className="text-gray-500">
          {/* Use our new helper functions! */}
          {formatViewCount(viewCount)} views • {formatTimeAgo(publishedAt)}
        </p>
      </div>
    </div>
  );
};

export default VideoCard;