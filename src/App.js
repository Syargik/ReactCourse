import React from 'react';
import './App.css';
import About from './Components/About';
import Header from './Components/Header';
import Main from './Components/Main';
import Reviews from './Components/Reviews';
import Types from './Components/Types';
import Price from './Components/Price';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <Main />
        <Types />
        <Reviews />
        <About />
        <Price />
        <Footer />
      </div>
    </div>
  );
}

export default App;
