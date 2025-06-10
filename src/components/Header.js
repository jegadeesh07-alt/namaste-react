import { FaCartPlus } from "react-icons/fa6";
import { LOGO_URL } from "../utils/constants.js";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus()

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            Online Status : {onlineStatus ? "✔️" : "❌"}
          </li>
          <li>
            <Link
              className="nav-items"
              to="/"
              style={{ textDecoration: "none" }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="nav-items"
              to="/about"
              style={{ textDecoration: "none" }}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              className="nav-items"
              to="/contact"
              style={{ textDecoration: "none" }}
            >
              Contact Us
            </Link>
            </li>
            <li>
            <Link
              className="nav-items"
              to="/grocery"
              style={{ textDecoration: "none" }}
            >
              Grocery
            </Link>
          </li>
          <li>
            <FaCartPlus />
          </li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
