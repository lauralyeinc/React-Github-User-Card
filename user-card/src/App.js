import React from 'react';

import './App.css';
import Fetching from "./components/Fetching.js"; 
import FollwersFetching from "./components/FollowersFetching.js";
import Following from "./components/Follower.js"; 



function App (){
    return (
      <div className="App">
      <h1> GitHub User Card </h1>
      <Fetching />
      <FollwersFetching /> 
      {/* <Following /> */}
      </div>
    );
}


export default App;
