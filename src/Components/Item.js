function Item({itemdata}){
    //console.log(itemdata.itemCards[0].card.info);
    /*if(props.itemData == undefined){
        return(
            <div>
                data is loading wait...
            </div>
        )
    }*/
    return(
        <div className="">
           
           {itemdata.itemCards.map((item,index) => (
            <div className="item-description-container">
                <div>
                <h3 className="item-title">{item.card.info.name}</h3>
                <h4 className="item-price">Rs. {item.card.info.defaultPrice/100 || item.card.info.price/100}</h4>
                <p className="item-description">{item.card.info.description}</p>
                <button className="add-btn">Add</button>
                </div>
                <div>
                    <img className="item-image" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/2a9da022d45bfb2a1fb432904da320e0"} alt="item photo" />
                </div>
            </div>
           ))}
        </div>
    )
}

export default Item;