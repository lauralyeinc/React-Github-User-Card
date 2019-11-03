import React from "react"; 
import Follower from "./Follower.js"; 
import EachUser from "./EachUser.js"; 

class FollowersFetching extends React.Component {
    state = {
        User: {},
        Followers: [ ]  
    };

    componentDidMount() {
        fetch("https://api.github.com/users/lauralyeinc/followers")
        .then(response => response.json())
        .then(response =>{
            console.log("FollowersFetching.js: componentDidMount fetch response", response);
            this.setState({
                Followers: response   
            });
        })
        .catch(error => {
            console.log("FollowersFetching.js: componentDidMount fetch Error", error);
        }); 
    }

    render(){
        return (
            <div className="following-area">
                {/* <p> testing </p> */}
                {this.state.Followers.map(Followers => 
                this.setState({
                    Followers: User 
                })
                )}
                <Follower key={this.state.Followers.id} Followers={this.state.Followers} />
                <EachUser key={this.state.User.id} User={this.state.User} />
            </div>
        )
    }
}

export default FollowersFetching; 