import { LOGO_URL } from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Header = () =>

    {
        const {loggedInUser} = useContext(UserContext);

        const cartItems = useSelector((store)=>store.cart.items);
        
        const onlineStatus = useOnlineStatus();
        const [btnName, setBtnName] = useState("Login");
        return( <>
        <div className="flex justify-between p-4 m-4 bg-blue-950 text-white shadow-lg rounded-md">
        <div className="logo-container">
            <img className="w-24" src={LOGO_URL}/>
        </div>
        <div className="nav-items ">
            <ul className="flex items-center p-4 m-4">
                <li className="px-4">Online Status {onlineStatus ? "🟢" : "🔴"}</li>
                <li className="px-4"><Link to="/">Home</Link></li>
                <li className="px-4"><Link to="/about">About Us</Link></li>
                <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                <li className="px-4">Contact Us</li>
                <li className="px-4 font-bold">Cart - ({cartItems.length} items)</li>
                <button className="login" 
                onClick={()=>{
                    btnName === "Login" ? 
                    setBtnName("Logout") : setBtnName("Login")
                }} >{btnName}</button>
                <li className="px-4 font-bold">{loggedInUser}</li>
            </ul>
        </div>
        </div>
        </>
        );
    }


    

    
export default Header;