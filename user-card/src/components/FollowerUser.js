import React from "react"; 
import styled from "styled-components"; 

function FollowerUser(props) {  
    console.log("FollowerUser.js: Props", props)
    let thisUser = props.User;
    return (
        <>
        <Div className="Follower-Card">
            <img width="150" src={thisUser.avatar_url} alt={thisUser.name} />
            <div className="User-Info">
                <h2> {thisUser.name} </h2>   
                <h4> {thisUser.login}</h4> 
                <A href={`${thisUser.html_url}`}> Github Profile </A>
            </div> 
        </Div>
        </>
    )
}


export default FollowerUser; 


const Div = styled.div`
    width: 20%;
    justify-content: center;
    padding: 1.5rem;
    background: linear-gradient(30deg, purple, orange);
    align-items: center;
    margin: auto;
    border-radius: 25% 10%;
    color: white; 
`

const A = styled.a`
    text-decoration: none;
    color: white; 
    font-family: helvetica;
    :hover{
        text-decoration: underline; 
    }
    :active{
        color: white;
    }
    :visited{
        color: yellow; 
    }
`