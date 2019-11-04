import React from "react"; 
import styled from "styled-components"; 


function EachUser(props) {  
    console.log("EachUser.js: EachUser: Props", props)
    let thisUser = props.User;
    return (
        <>
        <Div className="User-Card">
            <img width="300" src={thisUser.avatar_url} alt={thisUser.name} />
            <Spacing className="User-Info">
                <h2> {thisUser.name} </h2> 
                <img width="500" src="http://ghchart.rshah.org/lauralyeinc" alt="lauralyeinc's Github chart" />  
                <h4> Login: {thisUser.login}</h4> 
                <h4> Location: {thisUser.location} </h4>  
                <A href={`${thisUser.html_url}`}> Github Profile </A> 
            </Spacing> 
        </Div>
        </>
    )
}


export default EachUser; 

/* prop passing.  The state is spelled correctly.  In Fetching.js (parent) it is stated right.
this.state.User    `${}`  Switched EachUser.js for Featching in App.js and it worked. 
*/

const Div = styled.div`
    width: 35%;
    padding: 2rem;
    background: linear-gradient(45deg, #ff3399, #f98625);
    align-items: center;
    margin: auto;
    border-radius: 25% 10%;
    color: white; 
`
const Spacing = styled.div`
    width: 100%;
    margin: 0 auto;
`

const A = styled.a`
    text-decoration: none;
    color: white; 
    font-family: Times;
    :hover{
        text-decoration: underline; 
    }
    :active{
        color: purple;
    }
    :visited{
        color: yellow; 
    }
`