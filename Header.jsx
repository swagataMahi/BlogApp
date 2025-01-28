import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/pewalaLOGO.jpeg";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [isNavShowing, setisNavShowing] = useState(
    window.innerWidth > 800 ? true : false
  );
  const closeNavbar = () => {
    if (window.innerWidth < 800) {
      setisNavShowing(false);
    } else {
      setisNavShowing(true);
    }
  };
  return (
    <nav>
      <div className="container nav_container">
        <Link to="/" className="nav_logo" onClick={closeNavbar}>
          <img src={Logo} alt="Navbar logo" />
        </Link>
        {isNavShowing && (
          <ul className="nav_menu">
            <li>
              <Link to="/profile/sdfsdf" onClick={closeNavbar}>
                Sudipto Satpati
              </Link>
            </li>
            <li>
              <Link to="/create" onClick={closeNavbar}>
                Create Post
              </Link>
            </li>
            <li>
              <Link to="/authors" onClick={closeNavbar}>
                Authors
              </Link>
            </li>
            <li>
              <Link to="/logout" onClick={closeNavbar}>
                Logout
              </Link>
            </li>
          </ul>
        )}
        <button
          className="nav_toggle_btn"
          onClick={() => {
            setisNavShowing(!isNavShowing);
          }}
        >
          {isNavShowing ? <AiOutlineClose /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Header;
