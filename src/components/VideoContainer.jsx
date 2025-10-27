import VideoCard from "./VideoCard"
import data from "../utils/mockData"
import {useEffect, useState} from "react"
import { YOUTUBE_VIDEOS_API } from "../utils/constants"


const VideoContainer = () => {

    const [videoData, setVideoData] = useState(data);


    useEffect(()=>{
        const fetchHomePageData = async () => {
            const data =  await fetch(YOUTUBE_VIDEOS_API);
            const json = await data.json();
            setVideoData(json);
        }

        fetchHomePageData();

    },[])



    return (
        <div className="flex flex-wrap justify-around">

            {data.items.map((item) => {
                return <VideoCard key={item.id} data={item} />
})}

        </div>
    )
}

export default VideoContainer;