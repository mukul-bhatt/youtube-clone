import React from 'react'
import VideoDetails from './VideoDetails'

const WatchPage = () => {
  return (
    <div className='my-4 mx-3.5 mb-96'>
        <iframe width="915" height="515" src="https://www.youtube.com/embed/byas2EoAOYY?si=Tg7Zh36k6bqQu37H" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

        <VideoDetails />
    </div>
  )
}

export default WatchPage