import Header from "./Header"
import Body from "./Body"
import {useState} from "react";

const App = () => {
    const [toggleSidebar, setToggleSidebar] = useState(true);

    return (
        <div>
            <Header toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar}/>
            <Body toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar}/>
        </div>
    )
}

export default App;