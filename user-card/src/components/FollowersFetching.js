import React from "react"; 
import EachUser from "./EachUser.js"; 

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
            <div className="followers-fetching-info">
                {this.state.User.map(User => (
                <EachUser key={this.state.User.id} User={User} />
                ))}
            </div>
        )
    }
}

export default FollowersFetching; 