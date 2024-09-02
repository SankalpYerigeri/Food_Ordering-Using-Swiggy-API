import { CDN_URL } from "../utils/constants";

const RestuarantCard = (props) =>
    {
        const {resData} = props;
    
    
        const {name, cuisines, avgRating} = resData?.info;
        console.log(props);
        return (
            <div className="p-4 m-4 w-[250px] bg-slate-400 rounded-md">
                <img className="res-logo" alt="res-logo" src={CDN_URL+resData.info.cloudinaryImageId} />
                <h3>{name}</h3>
                <h4>{cuisines.join(", ")}</h4>
                <h4>{avgRating}</h4>
                <h4>{resData.info.sla.deliveryTime}</h4>
            </div>
        )
    }

    
export default RestuarantCard;