import User from "./User.js"
import UserClass from "./UserClass.js"
const About = () => {
    return(
        <div className="about">
            <h1>About</h1>
            <h2>Hello my dear friends this is namaste react course</h2>
            <User name={"Jegadeesh (function)"} location={"Bengaluru"} contact={"jegadeeh21@gmail.com"}/>

            <UserClass name={"Jegadeesh (class)"} location={"Bengaluru"} contact={"jegadeeh21@gmail.com"}/>
        </div>
    )
} 

export default About