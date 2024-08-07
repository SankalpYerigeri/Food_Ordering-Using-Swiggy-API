import RestuarantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

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

        //Conditional Rendering 
                
        return listofRes.length === 0 ? <Shimmer/> : (
            <div className="body">
                <div className="filter">
                    <div className="search">
                        <input type="text" className="search-box" value={searchText}
                        onChange={(e)=>
                        {
                            setSearchText(e.target.value);
                        }
                        }></input>
                        <button onClick={()=>
                            {
                                console.log(searchText);
                                const filteredList = listofRes.filter((res)=>res.info.name.includes(searchText));
                                setFilteredRes(filteredList);
                            }
                        }>Search</button>
                    </div>
                    <button className="filter-btn"
                     onClick={()=> 
                     {
                        const fileterdList = listofRes.filter((res)=>res.info.avgRating>4.3);
                        setFilteredRes(fileterdList);
                     }
                     }>Top Rated Restuarants</button>
                </div>
                <div className="res-container">
                    {filterdRes.map
                    ((restuarant) => 
                    (<RestuarantCard key={restuarant.info.id} resData={restuarant} />))}                             
                </div>
    
            </div>
        );
    };

export default Body;