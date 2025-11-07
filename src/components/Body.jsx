import { useEffect } from "react";
import VideoContainer from "./VideoContainer";
import ButtonList from "./ButtonList";
import { useDispatch } from "react-redux";
import { openSidebar } from "../utils/sidebarSlice";

const Body = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(openSidebar());
    },[])   //why is it suggessting to use dispatch in the dependency array

    
    return (
        <>
            <div className="flex">
            

            
            <div>
                <ButtonList />
                <VideoContainer  />

            </div>

            
            
        </div>
        </>
    )
}

export default Body;