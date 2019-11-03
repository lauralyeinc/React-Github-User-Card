import React from "react"; 

class Fetching extends React.Component {
    state = {
        User: { }     // or [] or "  "
    };

    componentDidMount() {
        fetch("https://api.github.com/users/lauralyeinc")
        .then(response => response.json())
        .then(response =>{
            console.log("Fetching.js: componentDidMount fetch response", response);
            this.setState({
                User: response     // .message could be anything the repsonse of the API is telling us
            });
        })
        .catch(error => {
            console.log("Fetching.js: componentDidMount fetch Error", error);
        }); 
    }

    render(){
        return (
            <div className="User-Card">
            <img src={this.state.User.avatar_url} alt="profile" /> 
            <h2> {this.state.User.name} </h2>   
            <h4> Login: {this.state.User.login} </h4> 
            <h4> Location: {this.state.User.location} </h4>  
            <p> Bio: {this.state.User.bio} </p>   
            </div> 
        )
    }
}

export default Fetching; 