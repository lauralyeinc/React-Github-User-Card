import React from 'react';
// import { makeStyles } from "@material-ui/styles"; 
import styled from "styled-components"; 
import './App.css';
import Fetching from "./components/Fetching.js"; 
import FollwersFetching from "./components/FollowersFetching.js";

function App (){
    return (
      <AppDiv className="App">
      <h1> GitHub User Card Project </h1>
      <Fetching />
      <FollwersFetching /> 
      </AppDiv>
    );
}


export default App;

const AppDiv = styled.div`
  background: violet; 
`
