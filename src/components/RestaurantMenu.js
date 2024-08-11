import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const RestaurantMenu = () =>
{

    const [resInfo, setresInfo] = useState(null);
    useEffect(()=>
    {
        fetchMenu();
    }, []);

    const fetchMenu = async () =>
    {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9584211&lng=77.67944109999999&restaurantId=489129&catalog_qa=undefined&submitAction=ENTER");

        const json = await data.json();

        console.log(json);
    }
    return (resInfo===null) ? (<Shimmer/>) : (
        <>
        <div>
            <h1>Name of the Restaurant</h1>
            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Burger</li>
                <li>Diet</li>
            </ul>
        </div>
        </>
    )
}

export default RestaurantMenu;