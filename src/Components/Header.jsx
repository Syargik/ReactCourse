import React from 'react'
import logo from '../img/logo.svg'
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                <div className={styles.header__body}>
                    <a href="*" className={styles.header__logo}>
                        <img src={logo} alt={logo} className={styles.logo} />
                    </a>
                    <nav className={styles.header__menu}>
                        <ul className={styles.menu__list}>
                            <li className={styles.menu__item}>
                                <a href="*" className={styles.menu__link}>Главная</a>
                            </li>
                            <li className={styles.menu__item}>
                                <Link to='/Biography' className={styles.menu__link}>
                                    Биография
                                </Link>
                            </li>
                            <li className={styles.menu__item}>
                                <a href="*" className={styles.menu__link}>Отзывы</a>
                            </li>
                            <li className={styles.menu__item}>
                                <a href="*" className={styles.menu__link}>Контакты</a>
                            </li>
                            <li className={styles.menu__item}>
                                <a href="*" className={styles.menu__link}>Новости</a>
                            </li>
                            <li className={styles.menu__item}>
                                <a href="*" className={styles.menu__link}>Обо мне</a>
                            </li>
                            <li className={styles.menu__item}>
                                <a href="*" className={styles.menu__link}>Блог</a>
                            </li>
                        </ul>
                    </nav>
                    <button className={styles.button}>
                        Записаться на сеанс
                    </button>
                    <div className={styles.header__burger}>
                        <span></span>
                    </div>
                </div>
            </div>
        </header>
    )
}