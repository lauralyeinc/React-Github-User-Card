import React from "react"; 
import EachUser from "./EachUser.js"; 

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
                User: response   
            });
        })
        .catch(error => {
            console.log("Fetching.js: componentDidMount fetch Error", error);
        }); 
    }

    render(){
        return (
            <div className="fetching-info">
                {/* <p> testing </p> */}
            <EachUser key={this.state.User.id} User={this.state.User} />
            </div>
        )
    }
}

export default Fetching; 