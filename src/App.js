import React from 'react';
import Menu from "./components/Menu";
import Menu2 from "./components/Meny2";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Info from "./components/Info";
import Company from "./components/Company";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <div className="App">
      <Menu2/>
      <Hero/>
      <Features/>
      <Info/>
      <Company/>
      <Footer/>
    </div>
  );
}

export default App;
