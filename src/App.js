import React, { lazy, Suspense, useEffect, useState } from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";


const Grocery = lazy(()=>import("./components/Grocery."))

const AppLayout = () =>
{

    const [userName, setUserName] = useState();

    useEffect(()=>
    {
        //Make an API call and send the username and Password
        
        const data = {
            name : "Sankalp"
        };
        setUserName(data.name);
    }, []);
    return(
        <UserContext.Provider value={{loggedInUser: userName}}>
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
        </UserContext.Provider>

    );
    
};

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout/>,
        children :[
            {
                path : "/",
                element : <Body/>
            },
            {
                path : "/about",
                element : <About/>
            },
            {
                path : "/restaurant/:resId",
                element : <RestaurantMenu/>
            },
            {
                path : "/grocery",
                element : <Suspense fallback={<h1>Loading...........</h1>}>
                    <Grocery/>
                    </Suspense>
            }

        ],
        errorElement : <Error/>
    },
    
])



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
