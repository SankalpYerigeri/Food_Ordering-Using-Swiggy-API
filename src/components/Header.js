import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () =>

    {

        const onlineStatus = useOnlineStatus();
        const [btnName, setBtnName] = useState("Login");
        return( <>
        <div className="flex justify-between p-4 m-4 bg-fuchsia-300 shadow-lg rounded-md">
        <div className="logo-container">
            <img className="w-24" src={LOGO_URL}/>
        </div>
        <div className="nav-items ">
            <ul className="flex items-center p-4 m-4">
                <li className="px-4">Online Status {onlineStatus ? "You are Online" : "You are offline"}</li>
                <li className="px-4"><Link to="/">Home</Link></li>
                <li className="px-4"><Link to="/about">About Us</Link></li>
                <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                <li className="px-4">Contact Us</li>
                <li className="px-4">Cart</li>
                <button className="login" 
                onClick={()=>{
                    btnName === "Login" ? 
                    setBtnName("Logout") : setBtnName("Login")
                }} >{btnName}</button>
            </ul>
        </div>
        </div>
        </>
        );
    }

    
export default Header;