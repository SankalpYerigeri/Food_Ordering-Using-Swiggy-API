const RestaurantCategory = (props) =>
{
    console.log(props);
    const {catdata} = props;
    console.log(catdata);
    const {title, itemCards} = catdata;


    return(
        <div className="w-6/12 m-auto my-4 bg-gray-50 shadow-lg  p-4 flex justify-between">
            <span className="font-bold text-large">{title}{"("}{itemCards.length}{")"}</span>
            <span>V</span>
            
        </div>
    )
}

export default RestaurantCategory;