import UserClass from "./UserClass";
import React from "react";


class About extends React.Component
{
    constructor(props)
    {
        super(props);
        console.log("Parent constructor")
    }

    componentDidMount()
    {
        console.log("Parent Mounted")
    }


    render()
    {
        console.log("Parent render");
        return(
            <>
            <h1>Hi this is About US</h1>
            <UserClass name={"Sankalp Class"} location={"Gulbarga"}/>
            </>
        )
    }
}



export default About;