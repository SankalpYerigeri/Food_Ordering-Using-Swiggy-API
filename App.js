import React from "react";
import  ReactDOM  from "react-dom/client";

const Description = () =>
{
    return <>
    <h4>Art and Photgraphy club of UVCE</h4>
    </>
}

const HeadingComponent = () =>
{
    return <><h1>UVCE Prathibimba</h1>
    <Description/>
    </>
    
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
