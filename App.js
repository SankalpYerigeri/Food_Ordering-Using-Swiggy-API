import React from "react";
import  ReactDOM  from "react-dom/client";

const Header = () =>
{
    return( <>
    <div className="header">
    <div className="logo-container">
        <img className="logo" src="https://media.istockphoto.com/id/1184633031/vector/cartoon-burger-vector-isolated-illustration.jpg?s=612x612&w=0&k=20&c=Z66WFszea0EkDxLe2179qxjBi4zvsOVvQsZ3AbQRjB8="/>
    </div>
    <div className="nav-items">
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
        </ul>
    </div>
    </div>
    </>
    );
}

const resObj =
 {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "877052",
              "name": "PUNJAB- E- DHABA",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/27/50cf8b3d-ee9b-4cd8-a54c-0b6d960f6a1b_877052.jpg",
              "locality": "5th Cross",
              "areaName": "Indiranagar",
              "costForTwo": "₹350 for two",
              "cuisines": [
                "Punjabi",
                "Chaat",
                "Beverages"
              ],
              "avgRating": 3.8,
              "parentId": "1476",
              "avgRatingString": "3.8",
              "totalRatingsString": "10+",
              "promoted": true,
              "adTrackingId": "cid=15073355~p=0~adgrpid=15073355#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=877052~eid=1f66501c-a335-465d-84c9-5d2e529754ca~srvts=1720633206526~collid=83639",
              "sla": {
                "deliveryTime": 43,
                "lastMileTravel": 7.1,
                "serviceability": "SERVICEABLE",
                "slaString": "40-45 mins",
                "lastMileTravelString": "7.1 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-07-10 23:30:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {
                    
                  },
                  "imageBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "ABOVE ₹350",
                "discountTag": "FLAT DEAL"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "isNewlyOnboarded": true,
              "restaurantOfferPresentationInfo": {
                
              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
              
            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=877052&source=collection&query=Biryani",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          
        }

const RestuarantCard = (props) =>
{
    const {resData} = props;
    console.log(props);
    return (
        <div className="res-card">
            <img className="res-logo" alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.info.cloudinaryImageId} />
            <h3>{resData.info.name}</h3>
            <h4>{resData.info.cuisines.join(", ")}</h4>
            <h4>{resData.info.avgRating}</h4>
            <h4>{resData.info.sla.deliveryTime}</h4>
        </div>
    )
}


const Body = () =>
{
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestuarantCard resData = {resObj} />
                <RestuarantCard resData = {resObj}/>
                              
            </div>

        </div>
    );
};

const AppLayout = () =>
{
    return(

        <div className="app">
            <Header/>
            <Body/>
        </div>

    );
    
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
