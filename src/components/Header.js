import { FaCartPlus } from "react-icons/fa6";
import { LOGO_URL } from "../utils/constants.js";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button"
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import HomeIcon from "@mui/icons-material/Home"
import ShoppingCart from "@mui/icons-material/ShoppingCart"
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../utils/UserContext.js";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus()

  const {loggedInUser} = useContext(UserContext)

  const cartItems = useSelector((store) => store.cart.items)
  console.log(cartItems)

  

  return (
    <div className="  flex justify-between shadow-lg" >
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL} />
      </div>
      <div className="flex items-center ">
        <ul className="flex p-4 m-4 ">
          <li className="px-4 mt-[3px]  text-gray-400">
            Status : {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="  py-1.5 px-4 h-9.5 text-gray-400 hover:text-black">
            <Link
              className="flex "
              to="/"
              
            >
             <HomeIcon /> Home 
              </Link>
          </li>
          <li className="  py-1.5 px-4 h-9.5 text-gray-400 hover:text-black">
            <Link
              className="nav-items"
              to="/about"
              
            >
             <InfoIcon />  About Us
            </Link>
          </li >
          <li className="  py-1.5 px-4 h-9.5 text-gray-400 hover:text-black">
            <Link
              className="nav-items"
              to="/contact"
              
            >
             <ContactMailIcon />  Contact Us
            </Link>
            </li>
            <li className="  py-1.5 px-4 h-9.5 text-gray-400 hover:text-black">
            <Link
              className="nav-items"
              to="/grocery"
             
            >
             <ShoppingCart /> Grocery
            </Link>
          </li>
          <li className="item-center flex pt-1 pr-2 text-xl text-gray-400 hover:text-black" >
            <Link to="/cart" className="flex"><FaCartPlus className="pt-2  text-2xl"/>({cartItems.length})</Link>
          </li>
          <li className="font-normal px-1 pt-1 pl-2 h-9.5 mr-1 text-xl text-black">
            {loggedInUser}
          </li>
          <Button
            variant="outlined"
            className=" items-center"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </Button>
          
        </ul>
      </div>
    </div>
  );
};

export default Header;
