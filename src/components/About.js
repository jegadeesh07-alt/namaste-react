import { Component } from "react"
import UserClass from "./UserClass.js"


class About extends Component {
    constructor(props){
        super(props)  
    }

    componentDidMount(){
    }
    render(){

        return(
        <div className="about">
            <h2>About</h2>
            <h3>Hello my dear friends this is namaste react course</h3>
            <UserClass name={"First "} location={"Bengaluru"} />
        </div>
    )
    }
}
 

export default About