import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () =>

    {

        const onlineStatus = useOnlineStatus();
        const [btnName, setBtnName] = useState("Login");
        return( <>
        <div className="flex">
        <div className="logo-container">
            <img className="logo" src={LOGO_URL}/>
        </div>
        <div className="nav-items">
            <ul>
                <li>Online Status {onlineStatus ? "You are Online" : "You are offline"}</li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/grocery">Grocery</Link></li>
                <li>Contact Us</li>
                <li>Cart</li>
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