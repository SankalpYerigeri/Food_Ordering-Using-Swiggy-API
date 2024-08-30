import React from "react"

class UserClass extends React.Component
{
    constructor(props)
    {
        super(props);  
        
        this.state =
        {
            userInfo : "Sankalp",
            login : "Not me",
            avatar_url : "dummy"
        }
    }

    async componentDidMount()
    {
        const data = await fetch("https://api.github.com/users/SankalpYerigeri");
        const json = await data.json();

        console.log(json);

        this.setState({
            userInfo : json
        })
    }

    componentDidUpdate()
    {
        console.log("Component uodated")
    }

    componentWillUnmount()
    {
        console.log("Component unmounted")
    }

    
    render()

    {
        const {location} = this.props;
        const {name, login, avatar_url} = this.state.userInfo;
        debugger

        return(
            <>
            <h1>{name}</h1>
            <h2>{login}</h2>
            <img className="w-20 h-20" src={avatar_url} alt="myphoto"/>
            <h3>Contact : @sankalp_yerigeri</h3>
            
            </>
        )

    }
}

export default UserClass;