import React from 'react';

import './App.css';
import Fetching from "./components/Fetching.js"; 
// import EachUser from "../src/components/EachUser.js"; 



function App (){
    return (
      <div className="App">
      <h1> GitHub User Card </h1>
      <Fetching />
      {/* <EachUser /> */}
      </div>
    );
  
  
}


export default App;
