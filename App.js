import React, { useState, useEffect } from "react"
import  ReactDOM  from "react-dom/client"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Body from "./src/Components/Body"
import Header from "./src/Components/Header"
import Footer from "./src/Components/Footer"
import About from "./src/Components/About"
import Cart from "./src/Components/Cart"
import Contact from "./src/Components/Contact"
import RestaurantMenu from "./src/Components/RestaurantMenu"
import Error from "./src/Components/Error"
import Login from "./src/Components/Login"
import UserContext from "./src/Utils/UserContext"

function AppLayout(){
    const[userName, setUserName] = useState("Guest");
    useEffect(() => {
        // Make an API call and send username and password
        const data = {
          name: "Guest",
        };
        setUserName(data.name);
      }, []);
    
    return(
        <>
            <UserContext.Provider value={{username:userName, setUserName}}>
            <Header />
            <Outlet />
            <Footer />
            </UserContext.Provider>
        </>
    )
}

const Router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "/login",
                element: <Login />,
            },
        ]
    },
    
    
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={Router}/>);