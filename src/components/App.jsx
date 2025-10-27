import Header from "./Header"
import Body from "./Body"
import {useState} from "react"
import { SidebarContext } from "../utils/toggleSidebarContext"


const App = () => {

    const [toggle, setToggle] = useState(true);

    return (
        <SidebarContext value={{toggle, setToggle}}>
            <Header />
            <Body />
        </SidebarContext>
    )
}

export default App;