import { useContext, useState } from "react";
import UserContext from "../Utils/UserContext";

function Login(){
    const[Username, setUsername] = useState("Guest");
    const[password, setPassword] = useState("default");
    const {username, setUserName} = useContext(UserContext);
    function handleSubmit(){
        setUserName(Username);
    }
    return(
        <div className="login-container">
            <h1 className="login-heading">Please enter your details</h1>
            <label className="login-label">Username: </label>
            <input className="login-input" placeholder="your username" value={Username} onChange={(e) => setUsername(e.target.value)}/>
            <label className="login-label">Password: </label>
            <input className="login-input" type="password" placeholder="your password" onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={handleSubmit} className="login-submit-btn">Submit</button>
        </div>
    )
}

export default Login;