import React from "react"

class UserClass extends React.Component{
    constructor(props){
        super(props)

        this.state = {
          userInfo : {
            name : "dummy",
            location : "default"
          }
        }
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/akshaymarch7")

        const json = await data.json()
        this.setState({
            userInfo : json
        })
    }
    
    render(){
        const {name, location, avatar_url} = this.state.userInfo
    return(
        <div className="user-card">
            <img src={avatar_url} alt="" />
            <h3>Name : {name}</h3>
            <h3>Locationt : {location}</h3>
            <h3>Contact : Akshaymarch7</h3>
            
        </div>
    )
    }
}
export default UserClass