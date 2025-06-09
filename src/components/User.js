const User = ({name,location,contact}) => {
    return(
        <div className="user-card">
            <h3>Name : {name}</h3>
            <h3>Locationt : {location}</h3>
            <h3>Contact : {contact}</h3>
        </div>
    )
}

export default User