import React from 'react';

import './App.css';
import Fetching from './components/Fetching.js'; 


function App (){
    return (
      <div className="App">
      <h1> GitHub User Card </h1>
      <Fetching /> 
      </div>
    );
  
  
}


export default App;
