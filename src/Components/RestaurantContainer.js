import RestaurantCard from "./RestaurantCard"
import { withPromoted } from "./RestaurantCard";
import restaurantList from "../Utils/data";
import { useState } from "react";

function RestaurantContainer(){
    const [resList,setResList] = useState(restaurantList);
    const [searchText, setSearchText] = useState("Search Restaurants");
    const WithPromotedCard = withPromoted(RestaurantCard);
    function handleFilterButtons(){
      let filteredData = resList.filter((res) => {
        return res.data.avgRating > 4
      })
      setResList(filteredData);
    }
    function handleSeeAllRestaurants(){
      setResList(restaurantList);
    }

    function handleSearch(){
      const searchFiltered = restaurantList.filter((res) => {
        return res.data.name.toLocaleLowerCase().includes(searchText);
      });
      setResList(searchFiltered);
    }
     return(
      <div>
        <div className="search-container">
          <div>
            <input className="input" placeholder="Search from Restaurants" onChange={(e) => {
              setSearchText(e.target.value);
            }}/>
            <button className="searchBtn" onClick={handleSearch}>Search</button>
            </div>
        </div>
      <div className="filterButtons">
            <button onClick={handleFilterButtons}>Top Rated Restaurants</button>
            <button onClick={handleSeeAllRestaurants}>All Restaurants</button>
          </div>
        <div className="restaurant-container">
          
             {resList.map((resData) =>{
               if(resData.data.promoted == true){
                return(
                  <WithPromotedCard data={resData} key={resData.data.id} />
                )
               }
               return <RestaurantCard data={resData} key={resData.data.id}/>
             })}
        </ div>
        </div>
    )
}

export default RestaurantContainer;