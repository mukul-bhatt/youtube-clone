import Sidebar from "./Sidebar";
import Header from "./Header";
import VideoContainer from "./VideoContainer";


const Body = () => {
    
    return (
        <>
            <div className="flex">

            <Sidebar />
            <VideoContainer  />
        </div>
        </>
    )
}

export default Body;