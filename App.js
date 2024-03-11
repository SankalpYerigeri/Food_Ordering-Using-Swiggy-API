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

const RestuarantCard = () =>
{
    return (
        <div className="res-card">
            <h3>Meghana Foods</h3>
        </div>
    )
}


const Body = () =>
{
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestuarantCard />
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
