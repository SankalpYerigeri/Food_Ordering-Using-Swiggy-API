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
        setresInfo(json.data);
        console.log(resInfo);
    }

    if ( resInfo === null) return (<Shimmer/>)

    const {name, cuisines, costForTwo} = resInfo.cards[2]?.card?.card.info;

    //const {itemCards} = resInfo?.cards[2].groupedCard.cardsGroupMap.REGULAR.cards[1].card.card


    return (
        <>
        <div>
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{costForTwo}</h3>
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