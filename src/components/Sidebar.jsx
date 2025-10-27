import { useSelector } from "react-redux";

const Sidebar = () => {

    const toggleSidebar = useSelector(store => store.sidebar.value);
    
    return toggleSidebar && (
<>

    <ul className="menu bg-base-200 min-h-full w-80 p-4">
      {/* Sidebar content here */}
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
      <li><a>Sidebar Item 2</a></li>
      <li><a>Sidebar Item 2</a></li>
      <li><a>Sidebar Item 2</a></li>
      <li><a>Sidebar Item 2</a></li>
      <li><a>Sidebar Item 2</a></li>
      <li><a>Sidebar Item 2</a></li>
      <li><a>Sidebar Item 2</a></li>
      <li><a>Sidebar Item 2</a></li>
      <li><a>Sidebar Item 2</a></li>
      <li><a>Sidebar Item 2</a></li>
      <li><a>Sidebar Item 2</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>

</>
    )
}

export default Sidebar;