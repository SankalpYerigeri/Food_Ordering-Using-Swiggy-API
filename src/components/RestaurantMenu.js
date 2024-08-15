import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { base_menu_url, end_url } from "../utils/constants";


const RestaurantMenu = () =>
{
    const resId = useParams();
    console.log(resId);
    
    const [resInfo, setresInfo] = useState(null);
    useEffect(()=>
    {
        fetchMenu();
    }, []);


    const fetchMenu = async () =>
    {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9584211&lng=77.67944109999999&restaurantId=" + resId);

        const json = await data.json();

        console.log(json);
        setresInfo(json.data);
        console.log(resInfo);
    }

    if ( resInfo === null) return (<Shimmer/>)

    const {name, cuisines, costForTwo} = resInfo.cards[2]?.card?.card.info;

    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;
    console.log(itemCards);


    return (
        <>
        <div>
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{costForTwo}</h3>
            <h2>Menu</h2>
            <ul>
                {itemCards.map(item => <li key={item.card.info.id}>{item.card.info.name}</li>)}
                
            </ul>
        </div>
        </>
    )
}

export default RestaurantMenu;