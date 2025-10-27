import VideoCard from "./VideoCard"
import data from "../utils/mockData";

const VideoContainer = () => {
    return (
        <div className="flex flex-wrap justify-around">

            {data.items.map((item) => {
                return <VideoCard key={item.id.videoId} data={item} />
})}

        </div>
    )
}

export default VideoContainer;