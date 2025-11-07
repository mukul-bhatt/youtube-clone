

const VideoCard = ({data}) => {


 const {title, channelTitle, thumbnails, publishedAt} = data.snippet;
 const {viewCount} = data.statistics;
 const {url, width, height} = thumbnails.high;
 
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="px-5 pt-10">
          <img
            width={width}
            height={height}
            src={url}
            alt="Shoes"
            className="rounded-xl" />
        </figure>
        <div className="card-body items-left">
          <h2 className="card-title">{title}</h2>
          <p>{channelTitle}</p>
          <p>{viewCount} views  {publishedAt}</p>
        </div>

      </div>
    )
}

export default VideoCard;