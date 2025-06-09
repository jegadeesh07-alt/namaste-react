import React from "react"

class UserClass extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        const {name,location,contact} = this.props
    return(
        <div className="user-card">
            <h3>Name : {name}</h3>
            <h3>Locationt : {location}</h3>
            <h3>Contact : {contact}</h3>
        </div>
    )
    }
}
export default UserClass