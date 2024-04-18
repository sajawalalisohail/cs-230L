import React from 'react';
import Navbar from './NavBar'
import Card from './Card'
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1>CS 230L</h1>
      <h2>Section - 002 </h2>
      <p> WVU ID: 800315622</p>
      <p> Hi I am Ali!</p>
      <Card />
    </div>
  );
}

export default App;

