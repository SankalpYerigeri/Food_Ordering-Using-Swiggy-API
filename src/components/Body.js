import RestuarantCard from "./RestaurantCard";
import { resList } from "../utils/mockdata";

const Body = () =>
    {
        let listofRes = resList;
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
                    {resList.map
                    ((restuarant) => 
                    (<RestuarantCard key={restuarant.info.id} resData={restuarant} />))}                             
                </div>
    
            </div>
        );
    };

export default Body;