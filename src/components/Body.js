import RestuarantCard from "./RestaurantCard";
import { resList } from "../utils/mockdata";
import { useState } from "react";

const Body = () =>
    {
        let [listofRes]= useState(resList);
        return (
            <div className="body">
                <div className="filter">
                    <button className="filter-btn"
                     onClick={()=> 
                     {
                        listofRes = listofRes.filter((res)=>res.info.avgRating>4.3);
                        console.log(listofRes);
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