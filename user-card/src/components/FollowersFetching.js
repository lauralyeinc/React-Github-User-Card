import React from "react"; 
import FollowerUser from "./FollowerUser.js"; 

import styled from "styled-components"; 

class FollowersFetching extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            User: []
        }
    }

    componentDidMount() {
        fetch("https://api.github.com/users/lauralyeinc/followers")
        .then(response => response.json())
        .then(response =>{
            console.log("FollowersFetching.js: componentDidMount fetch response", response);
            this.setState({
                User: response   
            });
        })
        .catch(error => {
            console.log("FollowersFetching.js: componentDidMount fetch Error", error);
        }); 
    }

    render(){
        return (
            <Spacing className="followers-fetching-info">
                {this.state.User.map(User => (
                <FollowerUser key={this.state.User.id} User={User} />
                ))}
            </Spacing>
        )
    }
}

export default FollowersFetching; 

const Spacing = styled.div`
    display: flex;
    padding: 2.5rem; 
`