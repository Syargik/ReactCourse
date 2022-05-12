import React from 'react';
import './Home.css';
import About from './About';
import Header from './Header';
import Main from './Main';
import Reviews from './Reviews';
import Types from './Types';
import Price from './Price';
import Footer from './Footer';


function MainPage() {
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

export default MainPage;