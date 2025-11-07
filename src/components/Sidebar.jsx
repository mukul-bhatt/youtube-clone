import { useSelector } from "react-redux";

const Sidebar = () => {

    const toggleSidebar = useSelector(store => store.sidebar.value);
    
    return toggleSidebar && (
<>

    <ul className="menu bg-base-200 min-h-full p-4 relative top-0 left-0">
      {/* Sidebar content here */}
      <li><a>Home</a></li>
      <li><a>Shorts</a></li>
      <li><a>Subscriptions</a></li>
      <li><a>Your Channel</a></li>
      <li><a>History</a></li>
      <li><a>Your Videos</a></li>
      <li><a>Liked Videos</a></li>
      <li><a>Trending</a></li>
      <li><a>Music</a></li>
      <li><a>Gaming</a></li>
      <li><a>News</a></li>
      <li><a>Sports</a></li>

    </ul>

</>
    )
}

export default Sidebar;
