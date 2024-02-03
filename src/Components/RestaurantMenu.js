import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";

function RestaurantMenu(){
    const params = useParams();
    const [resData, setResData] = useState(null);
    const [showIndex, setShowIndex] = useState(0);
    useEffect(() => {fetchData()}, []);
    async function fetchData(){
        const data =await fetch("https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId="+params.resId);
        const json = await data.json();
        setResData(json?.data);
        //console.log(json.data);
    }
    if(resData ==  null){
        return(
            <h1>Data is loading wait...</h1>
        )
    }
    const categories =
    resData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    
    //console.log(categories);*/
    return(
        <div className="restaurant-menu-container">
            <div className="restaurant-info-container">
                <div className="restaurant-image">
                    <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+resData?.cards[0].card?.card?.info?.cloudinaryImageId} alt="restaurant photo" />
                </div>
                <div>
                    <h1 className="restaurant-name">{resData?.cards[0]?.card?.card?.info?.name}</h1>
                    <p className="restaurant-cuisines">{resData?.cards[0]?.card?.card?.info?.cuisines.join(", ")}</p>
                    <div className="restaurant-data">
                        
                        <p>{resData?.cards[0].card?.card?.info?.avgRating}</p>
                        <div>|</div>
                        <p>{resData?.cards[0].card?.card?.info?.sla?.deliveryTime} Mins</p>
                        <div>|</div>
                        <p>{resData?.cards[0].card?.card?.info?.costForTwoMessage}</p>
                    </div>
                </div>
            </div>
            <div className="res-menu-container">
                
                
                {
                    categories.map((cat, index) => (
                        <RestaurantCategory showItems={showIndex == index ? true : false} setShowIndex ={() => setShowIndex(index)} key={index} data={cat} />
                    ))
                }
            </div>
            
           
        </div>
    )
}

export default RestaurantMenu;