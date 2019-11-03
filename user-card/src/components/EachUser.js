import React from "react"; 

function EachUser(props) {  
    console.log("EachUser.js: EachUser: Props", props)
    return (
        <>
        <div className="User-Card">
            <img src={props.User.avatar_url} alt={props.User.name} />
            <div className="User-Info">
                <h2> {props.User.name} </h2>   
                <h4> Login: {props.User.login}</h4> 
                <h4> Location: {props.User.location} </h4>  
                <p> Bio: {props.User.bio} </p>  
            </div> 
        </div>
        </>
    )
}


export default EachUser; 

/* prop passing.  The state is spelled correctly.  In Fetching.js (parent) it is stated right.
this.state.User    `${}`  Switched EachUser.js for Featching in App.js and it worked. 
*/