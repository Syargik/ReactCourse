import React from 'react'
import logo from '../img/logo.svg'

export default function Header() {
    return (
        <header className="header">
            <div className="header__container _container">
                <div className="header__body">
                    <a href="*" className="header__logo">
                        <img src={logo} alt={logo} className="logo"/>
                    </a>
                    <nav className="header__menu">
                        <ul className="menu__list">
                            <li className="menu__item">
                                <a href="*" className="menu__link">Главная</a>
                            </li>
                            <li className="menu__item">
                                <a href="*" className="menu__link">Сеансы</a>
                            </li>
                            <li className="menu__item">
                                <a href="*" className="menu__link">Отзывы</a>
                            </li>
                            <li className="menu__item">
                                <a href="*" className="menu__link">Контакты</a>
                            </li>
                            <li className="menu__item">
                                <a href="*" className="menu__link">Новости</a>
                            </li>
                            <li className="menu__item">
                                <a href="*" className="menu__link">Обо мне</a>
                            </li>
                            <li className="menu__item">
                                <a href="*" className="menu__link">Блог</a>
                            </li>
                        </ul>
                    </nav>
                    <button className="button">
                        Записаться на сеанс
                    </button>
                    <div className="header__burger">
                        <span></span>
                    </div>
                </div>
            </div>
        </header>
    )
}