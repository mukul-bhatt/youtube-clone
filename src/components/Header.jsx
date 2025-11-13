import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../utils/sidebarSlice";
import { Link } from "react-router";
import { addItem } from "../utils/searchSlice";

const Header = () => {

  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);
  const popoverRef = useRef(null);
  const dataObj = useSelector(store => store.searchbar);
  // console.log("DataoBj", dataObj)

  useEffect(()=>{

    const searchAPI = "https://suggestqueries-clients6.youtube.com/complete/search?client=youtube&q=" + inputValue;

    if(inputValue === ""){
      setData([]);
      popoverRef.current?.hidePopover();
      return;
    } 

    // Object.prototype.hasOwnProperty.call(dataObj, inputValue)

    if(dataObj && dataObj[inputValue]){
      console.log("check", dataObj);
      setData(dataObj[inputValue])
      return;
    }
      
    const timeout = setTimeout(()=>{
        FetchSearchSuggestions(searchAPI);
      }, 500)
  

    return ()=>{
      clearTimeout(timeout);
    }
    },[inputValue])


  const FetchSearchSuggestions = async (API) => {
    const data = await fetch(API);
    const text = await data.text();
    
    const suggestions = createArrayFromResponseString(text);
    console.log("Dispatching payload:", { [inputValue]: suggestions });
    dispatch(addItem({ [inputValue]: suggestions }))
    setData(suggestions)

    if(popoverRef.current){
      popoverRef.current.showPopover();
    }

}

  const createArrayFromResponseString = (responseString) => {
// Step 1: Locate the start and end of the main data array
// (It starts after the second comma and ends before the last comma)
if(responseString === "") return;
const start = responseString.indexOf('[', responseString.indexOf('[') + 1);
const end = responseString.lastIndexOf(']', responseString.lastIndexOf(']') - 1);

// Step 2: Extract the array string
const arrayString = responseString.substring(start, end + 1);

// Step 3: Parse the extracted string as JSON
// Note: This relies on the internal array being valid JSON (which it usually is)
try {
    const dataArray = JSON.parse(arrayString);

    // Step 4: Extract the suggestion strings
    const suggestions = dataArray.map(item => item[0]);
    console.log("suggestions",suggestions);
    return suggestions;
    // setData(suggestions);

   

} catch (error) {
    console.error("Failed to parse the data:", error);
}
  }



  return (
    <div className="navbar bg-base-100 shadow-sm flex justify-between sticky top-0 z-10">
      <div className="navbar-start flex" >
        <button className="btn btn-square btn-ghost" onClick={()=>dispatch(toggleSidebar())}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current"
          >
            {" "}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>{" "}
          </svg>
        </button>

        {/* <a className="btn btn-ghost text-xl">Youtube</a> */}
        <Link to="/">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk7qtQGH84L4N30pBZI8Ox-Aq6zNzHuCEn3Q&s"
          alt="logo"
          width={"70px"}
        />
        </Link>
      </div>


      <div className="navbar-center" >
        <label className="input input-primary" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" }} >
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          {/* <input type="search" required placeholder="Search" onInput={debounce(handleInput, 300)}/> */}
          <input className="block" type="search" required placeholder="Search" onInput={(e) => setInputValue(e.target.value)}/>
          
        </label>



    <ul ref={popoverRef} className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
      popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" }} >

        {data.map((item, index) => {
          return  <li key={index}><a>{item}</a></li>
        })}
     
    </ul> 
      </div>

      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;




//////////////////////////////////////////
// Race condition implement using abortController
// Study pop over api
// js used to manipulate strings
// study debouncing again ✅
// implement caching
// find a workaround against cors for autocomplete api
// docs of fetch
// this in js
// debouncing implementation in react 
// extract all suggestions logic into a useSuggestions hook