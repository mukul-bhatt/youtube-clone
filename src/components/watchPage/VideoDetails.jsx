import React, {useEffect, useState} from "react";
import { dataForWatchPage as data, ChannelStats as subscriberData} from "../../utils/mockData";
import { formatViewCount } from "../../utils/helpers";

const VideoDetails = ({videoId}) => {

  // i am to get video data from this videoid 
  // -- even data about comments

  

  const [videoData, setVideoData] = useState(data);
  const [channelStats, setChannelStats] = useState(subscriberData);
  const {subscriberCount} = channelStats.items[0].statistics;

  const fetchVideoData = async () => {
    const VIDEO_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" + videoId + "&key=AIzaSyDV5n1LnD0gF6CzFo-R3RUGSXqCyEPdfKo"
    const data = await fetch(VIDEO_API);
    const json = await data.json();
    setVideoData(json);
  };

  const fetchChannelData = async(channelId) => {
    const CHANNNEL_API = "https://youtube.googleapis.com/youtube/v3/channels?part=statistics&id="+ channelId +"&key=AIzaSyDV5n1LnD0gF6CzFo-R3RUGSXqCyEPdfKo";
    const data = await fetch(CHANNNEL_API);
    const json = await data.json();
    setChannelStats(json);

  }

  useEffect(()=>{

        fetchVideoData();

  }, [])
  
  const { title, description, channelTitle, channelId } = videoData.items[0].snippet;
  
  useEffect(()=>{
    fetchChannelData(channelId);
  }, [channelId])
  
  return (
    <div className="my-3.5 w-3/4">
      <div className="prose">
      <h2>{title}</h2>
      </div>

      <div className="channel-wala-div flex justify-between my-2 ">
        <div className="flex items-center">
          <div className="avatar">
            <div className="w-12 rounded-full mr-3">
              <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
            </div>
          </div>

          <div className="mr-6">
            <h3 className="prose prose-lg">{channelTitle}</h3>
            <p className="prose prose-sm">{formatViewCount(subscriberCount)} subscribers</p>

          </div>

          <button className="btn btn-soft rounded-3xl">Subscribe</button>
        </div>
        <div>
          <button className="btn btn-soft rounded-3xl">Like</button>
          <button className="btn btn-soft rounded-3xl">Dislike</button>
          <button className="btn btn-soft rounded-3xl">Share</button>
          <button className="btn btn-soft rounded-3xl">Download</button>
          <button className="btn btn-soft rounded-3xl">Save</button>
        </div>
      </div>

      <div className="description-wala-div my-2 h-24 overflow-y-scroll">
        <p className="prose max-w-none">{description}</p>
      </div>
    </div>
  );
};

export default VideoDetails;
