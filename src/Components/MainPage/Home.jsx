import React from 'react';
import About from './About';
import Header from './Header';
import Main from './Main';
import Reviews from './Reviews';
import Types from './Types';
import Price from './Price';
import Footer from './Footer';
import styles from './Home.module.css';

function MainPage() {
    return (
        <div className={styles.wrapper}>
            <Header />
            <Main />
            <Types />
            <Reviews />
            <About />
            <Price />
            <Footer />
        </div>
    );
}

export default MainPage;