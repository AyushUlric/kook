import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setshowMenu] = useState(false);
  return (
    <nav className="navbar">
      <img src="./logo.jpg" width={80} alt="" />
      <h1 className="font-bold text-xl">Kook Sportswear</h1>
      <div className="flex md:hidden w-auto pl-6 justify-end items-center">
        <button
          onClick={() => {
            showMenu ? setshowMenu(false) : setshowMenu(true);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="h-5 w-5 bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>
      </div>
      <div className={showMenu ? "absolute z-[2000] bg-white shadow-md top-[6.5rem] w-full p-4 left-0" : "hidden"}>
        <ul>
          <li className="pt-[1rem] font-bold pb-[1rem]">
          <Link to="/" onClick={()=>{setshowMenu(false);}}>Home</Link>
          </li>
          <li className="pt-[1rem] font-bold pb-[1rem]">
          <Link to="/" onClick={()=>{setshowMenu(false);}}>track-suits</Link>
          </li>
          <li className="pt-[1rem] font-bold pb-[1rem]">
          <Link to="/" onClick={()=>{setshowMenu(false);}}>top-wear</Link>
          </li>
          <li className="pt-[1rem] font-bold pb-[1rem]">
          <Link to="/" onClick={()=>{setshowMenu(false);}}>bottom-wear</Link>
          </li>
          <li className="pt-[1rem] font-bold pb-[1rem]">
          <Link to="/profile" onClick={()=>{setshowMenu(false);}}>About Us</Link>
          </li>
        </ul>
      </div>
      <div className="links mr-[4rem] hidden md:block font-semibold">
        <Link to="/">Home</Link>
        <Link to="/">Track Suits</Link>
        <Link to="/">Top Wear</Link>
        <Link to="/">Bottom Wear</Link>
        <Link to="/profile">About Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;
