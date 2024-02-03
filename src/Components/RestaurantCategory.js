import Item from "./Item";

export default function RestaurantCategory({data,showItems,setShowIndex}){
    
    function handleClick(){
        
        setShowIndex();
    }
    //console.log(data);
    return(
        <div>
        <div className="res-menu-heading-container" onClick={handleClick}>
            <h3>{data?.card?.card?.title} ({data.card.card.itemCards.length})</h3>
            <img className="arrow-down-icon" src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt="arrow image"/>
        </div>
        <div className="res-menu-description-container">
           {showItems && <Item itemdata={data?.card.card} />}
        </div>
        </div>
    )
}