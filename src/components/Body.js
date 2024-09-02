import RestuarantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () =>
    {
        const [listofRes, setlistofRes]= useState([]);
        const [searchText, setSearchText] = useState("");
        const [filterdRes, setFilteredRes] = useState([]);

        useEffect(()=>
        {
            fetchData();
        }, []);

        const fetchData = async () =>
        {
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");

            const json = await data.json();

            setlistofRes(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
            setFilteredRes(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        }

        const onlineStatus = useOnlineStatus();

        if(onlineStatus === false)
        {
            return (
                <h1> Looks like you are offline, Please check your internet connection</h1>
            )
        }

        //Conditional Rendering 
                
        return listofRes.length === 0 ? <Shimmer/> : (
            <div className="body">
                <div className="flex">
                    <div className="search">
                        <input type="text" className="border border-black rounded-sm m-4" value={searchText}
                        onChange={(e)=>
                        {
                            setSearchText(e.target.value);
                        }
                        }></input>
                        <button className="px-4 py-2 m-4 bg-green-200 rounded-md" onClick={()=>
                            {
                                console.log(searchText);
                                const filteredList = listofRes.filter((res)=>res.info.name.includes(searchText));
                                setFilteredRes(filteredList);
                            }
                        }>Search</button>
                    </div>
                    <button className="px-4 py-2 m-4 bg-green-200 rounded-md"
                     onClick={()=> 
                     {
                        const fileterdList = listofRes.filter((res)=>res.info.avgRating>4.3);
                        setFilteredRes(fileterdList);
                     }
                     }>Top Rated Restuarants</button>
                </div>
                <div className="flex flex-wrap flex-row">
                    {filterdRes.map
                    ((restuarant) => 
                    (<Link key={restuarant.info.id} to={"/restaurant/" + restuarant.info.id}><RestuarantCard   resData={restuarant} /></Link>))}                             
                </div>
    
            </div>
        );
    };

export default Body;