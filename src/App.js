import React, { useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/button';
import Navbar from './components/nav';
import { PRODUCTS } from './constants/data/products';
import Card from './components/cards';





function App() {
  const onHandlerClick = () => {
    alert("messi")
  }

  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button text="Click me" onHandlerClick ={onHandlerClick} />  
        {PRODUCTS.map((product) => (
          <Card product={product} key={product.name} />
          
          ))}


        
      </header>
    </div>
  );
}

export default App;
