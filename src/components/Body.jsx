import Sidebar from "./Sidebar";
import VideoContainer from "./VideoContainer";
import ButtonList from "./ButtonList";

const Body = ({toggleSidebar, setToggleSidebar}) => {
    
    return (
        <>
            <div className="flex">
            

            <Sidebar toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar}/>
            <div>
                <ButtonList />
                <VideoContainer  />

            </div>
            
        </div>
        </>
    )
}

export default Body;