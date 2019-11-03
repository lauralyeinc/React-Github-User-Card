import React from "react"; 

function Follower(props) {  
    console.log("Follower.js: Follower: Props", props)
    return (
        <>
        <div className="Follower-Card">
            <img width="150" src={props.Followers.avatar_url} alt={props.Followers.name} />
            <div className="Follower-Info">
                <h2> {props.Followers.name} </h2>   
                <h4> Login: {props.Followers.login}</h4> 
                <h4> Location: {props.Followers.location} </h4>  
                <p> Bio: {props.Followers.bio} </p>  
            </div> 
        </div>
        </>
    )
}


export default Follower; 
