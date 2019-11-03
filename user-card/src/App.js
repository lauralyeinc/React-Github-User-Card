import React from 'react';

import './App.css';
import Fetching from "./components/Fetching.js"; 
import FollwersFetching from "./components/FollowersFetching.js";


function App (){
    return (
      <div className="App">
      <h1> GitHub User Card </h1>
      <Fetching />
      <FollwersFetching /> 
      </div>
    );
}


export default App;
