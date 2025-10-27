

const VideoCard = ({data}) => {


 const {title, description, thumbnails} = data.snippet;

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
          <p>{description}</p>
          <p>4.7 lakh views . 5 days ago</p>
        </div>

      </div>
    )
}

export default VideoCard;