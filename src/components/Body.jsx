import Sidebar from "./Sidebar";
import Header from "./Header";
import VideoContainer from "./VideoContainer";


const Body = ({toggleSidebar, setToggleSidebar}) => {
    
    return (
        <>
            <div className="flex">

            <Sidebar toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar}/>
            <VideoContainer  />
        </div>
        </>
    )
}

export default Body;