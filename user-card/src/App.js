import React from 'react';
import styled from "styled-components"; 
import './App.css';
import Fetching from "./components/Fetching.js"; 
import FollwersFetching from "./components/FollowersFetching.js";

function App (){
    return (
      <AppDiv className="App">
      <Title> GitHub User Card Project </Title>
      <Fetching />
      <FollwersFetching /> 
      </AppDiv>
    );
}


export default App;

const AppDiv = styled.div`
  background: violet; 
`

const Title = styled.h1`
  font-family: monospace; 
  padding: .5rem;  
`
