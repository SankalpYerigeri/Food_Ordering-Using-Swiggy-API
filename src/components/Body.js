import RestuarantCard from "./RestaurantCard";
import { resList } from "../utils/mockdata";

const Body = () =>
    {
        return (
            <div className="body">
                <div className="search">Search</div>
                <div className="res-container">
                    {resList.map
                    ((restuarant) => 
                    (<RestuarantCard key={restuarant.info.id} resData={restuarant} />))}                             
                </div>
    
            </div>
        );
    };

export default Body;