import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = (props) =>
{
    console.log(props);
    const {catdata} = props;
    console.log(catdata);
    const {title, itemCards} = catdata;
    console.log(itemCards);
    const [showItems, setShowItems] = useState(false);

    const handleClick= () =>
    {
        setShowItems(!showItems);
    }


    return(
        <div className="w-6/12 m-auto my-4 bg-gray-50 shadow-lg  p-4">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
            <span className="font-bold text-large">{title}{"("}{itemCards.length}{")"}</span>
            <span>👇</span>
            </div>
            {/* Accordion Body */}
            {showItems && <ItemList data={itemCards}/>}
            
        </div>
    )
}

export default RestaurantCategory;