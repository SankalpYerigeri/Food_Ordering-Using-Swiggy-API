import RestuarantCard from "./RestaurantCard";
import { resList } from "../utils/mockdata";
import { useState, useEffect } from "react";

const Body = () =>
    {
        let [listofRes, setlistofRes]= useState(resList);

        useEffect(()=>
        {
            fetchData();
        }, []);

        const fetchData = async () =>
        {
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

            const json = await data.json();

            console.log(json);
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