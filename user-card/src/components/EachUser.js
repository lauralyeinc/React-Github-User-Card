import React from "react"; 

function EachUser(props) {  
    console.log("EachUser.js: EachUser: Props", props)
    let thisUser = props.User;
    return (
        <>
        <div className="User-Card">
            <img width="150" src={thisUser.avatar_url} alt={thisUser.name} />
            <div className="User-Info">
                <h2> {thisUser.name} </h2>   
                <h4> Login: {thisUser.login}</h4> 
                <h4> Location: {thisUser.location} </h4>  
                <p> Bio: {thisUser.bio} </p>  
            </div> 
        </div>
        </>
    )
}


export default EachUser; 

/* prop passing.  The state is spelled correctly.  In Fetching.js (parent) it is stated right.
this.state.User    `${}`  Switched EachUser.js for Featching in App.js and it worked. 
*/