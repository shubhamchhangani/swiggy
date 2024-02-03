import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../Utils/UserContext";

function Header(){
    const [onlineStatus, setOnlineStatus] = useState(true);
    useEffect(() => {
        window.addEventListener("offline", () => {
            setOnlineStatus(false);
            alert("Looks like you're offline!! Please check your internet connection");
        })

        window.addEventListener("online", () => {
            setOnlineStatus(true);
        })
    },[]);
    if(onlineStatus == false){
        return(
            <h1>Looks like you are offline!! please check your internet connection</h1>
        )
    }
    const {username, setUserName} = useContext(UserContext);
    function handleClick(){
        if(username == "Guest"){
            return;
        }else{
            setUserName("Guest");
        }
    }
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo-image" src="https://t3.ftcdn.net/jpg/04/03/74/22/360_F_403742248_8DDzcFF4jw05lWqftk2yxzKRpFvpZ01Y.jpg"/>
                
            </div>
            <div className="nav-container">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact us</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    
                    <li onClick={handleClick} className="login-btn"><Link to="/login">{username == "Guest" ? "Login" : "LogOut"}</Link></li>
                    <li>{username}</li>
                    <li>{onlineStatus ? "Online" : "Offline"}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;