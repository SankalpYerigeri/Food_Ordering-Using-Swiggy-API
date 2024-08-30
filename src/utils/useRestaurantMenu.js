import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) =>
{

    const [resInfo, setResInfo] = useState(null);

    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async () =>
    {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9584211&lng=77.67944109999999&restaurantId=489129&catalog_qa=undefined&submitAction=ENTER");

        const json = await data.json();

        console.log(json);
        setResInfo(json.data);
    }

    return resInfo;
}

export default useRestaurantMenu;