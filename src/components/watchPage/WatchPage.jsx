// import React, { useEffect, useRef } from 'react'
// import VideoDetails from './VideoDetails'
// import { useDispatch } from 'react-redux';
// import { closeSidebar } from '../../utils/sidebarSlice';
// import { useParams } from 'react-router';


// const WatchPage = () => {

//   const playerRef = useRef(null)
//   const iframeRef = useRef(null);

//   const dispatch = useDispatch();

//   const {id} = useParams();

//   useEffect(()=>{

//     dispatch(closeSidebar());
    
//     if(!window.YT){
//       const tag = document.createElement('script');
//       tag.src = "https://www.youtube.com/iframe_api";
  
//       // 2. Insert the script into the DOM
//       const firstScriptTag = document.getElementsByTagName('script')[0];
//       firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
//     }


//     window.onYouTubeIframeAPIReady = () => {
//       playerRef.current = new window.YT.Player(iframeRef.current, {
//         width: "1000",
//         height: "450",
//         videoId: id,
//         playerVars: {
//           // playsInLine: 1,
//           enablejsapi : 1,
//           // autoplay : 1,
//           // "controls": 0
//         },
//         events: {
//           'onReady': (event) => console.log('Player is ready', event.target),
//           'onStateChange': (event) => console.log('Player state changed:', event.data),
//         }
//       })
//     }


//     // Cleanup function: Runs when the component unmounts
//     return () => {
//       if (playerRef.current && typeof playerRef.current.destroy === 'function') {
//           playerRef.current.destroy();
//       }
//       // It's usually safer not to nullify window.onYouTubeIframeAPIReady entirely 
//       // as other components might rely on it if they are still mounted.
//   };
// }, []); // Dependency: Only dispatch to avoid warnings, NOT 'id'



// useEffect(() => {
//   // This runs on initial mount AND every time 'id' changes
  
//   // Check if the player instance exists AND the API is loaded
//   if (playerRef.current && window.YT && typeof playerRef.current.loadVideoById === 'function') {
    
//     // Use the API method to load the new video without re-initializing the whole player
//     playerRef.current.loadVideoById(id);
    
//   } else if (window.YT && !playerRef.current) {
//       // Edge case: API loaded, but player hasn't been initialized yet (e.g., if we navigate too fast)
//       // We rely on window.onYouTubeIframeAPIReady to eventually initialize it.
//   }
  
// }, [id]); // Dependency: Runs whenever the video ID changes


 
//   return (
//     <div className='my-4 mx-3.5 mb-96'>
//         <div ref={iframeRef} id="iframeYT" ></div>

//         <VideoDetails videoId={id}/>
//     </div>
//   )
// }

// export default WatchPage







// Gemini flash ka bakwas code
// import React, { useEffect, useRef, useState } from 'react'
// import VideoDetails from './VideoDetails'
// import { useDispatch } from 'react-redux';
// import { closeSidebar } from '../../utils/sidebarSlice';
// import { useParams } from 'react-router';


// const WatchPage = () => {

//   const playerRef = useRef(null);
//   const playerDivRef = useRef(null); // Changed from iframeRef for clarity
//   const [isApiReady, setIsApiReady] = useState(false); // New state to track API loading

//   const dispatch = useDispatch();
//   const { id } = useParams();

//   // --- I. Load API Script & Define Global Callback (Runs ONCE) ---
//   useEffect(() => {
//     dispatch(closeSidebar());

//     // 1. Load the script only if it hasn't been added to the DOM
//     if (!document.getElementById('youtube-api-script')) {
//       const tag = document.createElement('script');
//       tag.src = "https://www.youtube.com/iframe_api";
//       tag.id = 'youtube-api-script'; 
//       const firstScriptTag = document.getElementsByTagName('script')[0];
//       firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
//     }

//     // 2. Define the global callback
//     // This runs the first time the external script finishes loading
//     window.onYouTubeIframeAPIReady = () => {
//       setIsApiReady(true); // Signal to React that the YT object is ready to use
      
//       // Initialize the player immediately upon API readiness
//       playerRef.current = new window.YT.Player(playerDivRef.current, {
//         videoId: id, // Use current ID for initial load
//         width: "1000",
//         height: "450",
//         playerVars: {
//           enablejsapi: 1, 
//         },
//         events: {
//           'onReady': (event) => console.log('Player is ready', event.target),
//           'onStateChange': (event) => console.log('Player state changed:', event.data),
//         }
//       });
//     };
    
//     // Cleanup: Destroy player instance
//     return () => {
//       // Clear the player instance on unmount
//       if (playerRef.current && typeof playerRef.current.destroy === 'function') {
//           playerRef.current.destroy();
//       }
//     };
//   }, [dispatch]); // Run once on mount

//   // --- II. Load New Video (Runs when 'id' changes AND API is ready) ---
//   useEffect(() => {
//     // 1. Skip if the player hasn't been initialized yet (initial load case)
//     if (!playerRef.current) return;
    
//     // 2. When 'id' changes AND player exists, use the API method to load the new video
//     if (isApiReady) {
//       playerRef.current.loadVideoById(id);
//     }

//   }, [id, isApiReady]); // Dependencies: Re-run when 'id' or 'isApiReady' changes
 
//   return (
//     <div className='my-4 mx-3.5 mb-96'>
//         {/* Use playerDivRef as the placeholder */}
//         <div ref={playerDivRef} id="iframeYT" ></div>

//         <VideoDetails videoId={id}/>
//     </div>
//   )
// }

// export default WatchPage;






// Final and correct code by gemini pro, i have to get to this on my own

import React, { useEffect, useRef } from 'react';
import VideoDetails from './VideoDetails';
import { useDispatch } from 'react-redux';
import { closeSidebar } from '../../utils/sidebarSlice';
import { useParams } from 'react-router';

const WatchPage = () => {
  const playerRef = useRef(null); // Holds the YT.Player instance
  const playerDivRef = useRef(null); // Holds the <div> element to attach the player to
  const dispatch = useDispatch();
  const { id } = useParams();

  const handleStateChange =  (event) => {
   

    console.log('Player state changed:', event.data)
  }

  useEffect(() => {
    dispatch(closeSidebar());

    // --- 1. Function to initialize a new player ---
    const initializePlayer = () => {
      // Ensure the div exists
      if (playerDivRef.current) {
        playerRef.current = new window.YT.Player(playerDivRef.current, {
          videoId: id,
          width: "1000",
          height: "450",
          playerVars: {
            enablejsapi: 1,
            // autoplay: 1,
            cc_lang_pref: "hi",
            cc_load_policy: 1,
            color: "white",
            loop: 1
          },
          events: {
            'onReady': (event) => {
              playerRef.current.mute()
              console.log('Player is ready', event.target)
            },
            'onStateChange': handleStateChange
          }
        });
      }
    };

    // --- 2. Check if the API script is loaded ---
    if (window.YT && window.YT.Player) {
      // If API is already loaded (e.g., on ID change or remount), just initialize
      initializePlayer();
    } else if (!document.getElementById('youtube-api-script')) {
      // If script is not loaded, load it
      const tag = document.createElement('script');
      tag.id = 'youtube-api-script';
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // Set the global callback to initialize the player once the script loads
      window.onYouTubeIframeAPIReady = () => {
        initializePlayer();
      };
    }

    // --- 3. Cleanup Function ---
    // This runs when the component unmounts OR when the 'id' changes
    return () => {
      if (playerRef.current && typeof playerRef.current.destroy === 'function') {
        playerRef.current.destroy();
      }
    };

  }, [id, dispatch]); // Re-run this ENTIRE effect when the video 'id' changes



  return (
    <div className='my-4 mx-3.5 mb-96'>
      {/* This div is the placeholder that the API replaces with the iframe */}
      <div ref={playerDivRef} id="player-container"></div>
      <VideoDetails videoId={id} />
    </div>
  );
};

export default WatchPage;