import React from "react";
import { dataForWatchPage as data } from "../../utils/mockData";

const VideoDetails = () => {
  const { title, description, channelTitle } = data.items[0].snippet;
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
            <p className="prose prose-sm">2.3lakh subscribers</p>
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
