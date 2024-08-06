import RestuarantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () =>
    {
        const [listofRes, setlistofRes]= useState([]);

        useEffect(()=>
        {
            fetchData();
        }, []);

        const fetchData = async () =>
        {
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");

            const json = await data.json();

            setlistofRes(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        }

        if(listofRes.length === 0)
        {
            return <Shimmer/>
        }
        
        return (
            <div className="body">
                <div className="filter">
                    <button className="filter-btn"
                     onClick={()=> 
                     {
                        const fileterdList = listofRes.filter((res)=>res.info.avgRating>4.3);
                        setlistofRes(fileterdList);
                     }
                     }>Top Rated Restuarants</button>
                </div>
                <div className="res-container">
                    {listofRes.map
                    ((restuarant) => 
                    (<RestuarantCard key={restuarant.info.id} resData={restuarant} />))}                             
                </div>
    
            </div>
        );
    };

export default Body;