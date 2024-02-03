import { Link } from "react-router-dom";

function RestaurantCard({data}){
    return(
        <div className="restaurant-card">
            <img className="res-image" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ data.data.cloudinaryImageId} />
            <h3>{data.data.name}</h3>
            <p>{data.data.cuisines.join(", ")}</p>
            <p>{data.data.avgRating} Stars</p>
            <p>{data.data.maxDeliveryTime} minutes Delivery time</p>
            <Link to={"/restaurants/"+data.data.id}><button className="exploreBtn">Explore</button></Link>
        </div>
    )
}

export const withPromoted = (RestaurantCard)=> {
    return(props) => {
        return(
            <div>
            <label className="promoted-label">Promoted</label>
            <RestaurantCard {...props} />
        </div>
        );
        
    }
}

export default RestaurantCard;