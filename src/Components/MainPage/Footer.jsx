import React from 'react'
import location from '../../img/carbon_location-filled.png'
import metro from '../../img/metro.png'
import calendar from '../../img/bi_calendar-week-fill.png'
import styles from './Home.module.css';

export default function Footer() {
    return (
        <footer>
            <div className={styles.footer__container}>
                <div className={styles.map}>
                    <iframe
                        title="map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1338502.247942618!2d30.02736222008507!3d60.01844362009769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696378cc74a65ed%3A0x6dc7673fab848eff!2z0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LMsINCg0L7RgdGB0LjRjw!5e1!3m2!1sru!2sua!4v1650288081551!5m2!1sru!2sua"
                        width="900"
                        height="600"
                        styles={{ border: "0" }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade" />
                </div>
                <div className={styles.on__map}>
                    <div className={styles.map__item}>
                        <h1>Бассейн WorkclassName</h1>
                        <div className={styles.place}>
                            <div className={styles.place__location}>
                                <img src={location} alt="" />
                                <h2>Невский 140</h2>
                            </div>
                            <div className={styles.place__metro}>
                                <img src={metro} alt="" />
                                <h3>м. Спасская</h3>
                            </div>
                            <div className={styles.place__date}>
                                <img src={calendar} alt="" />
                                <h4>Запись по договоренности</h4>
                            </div>
                        </div>
                        <button className={styles.button}>Запись по договоренности</button>
                    </div>
                    <div className={styles.map__item}>
                        <h1>Бассейн WorkclassName</h1>
                        <div className={styles.place}>
                            <div className={styles.place__location}>
                                <img src={location} alt="" />
                                <h2>Невский 140</h2>
                            </div>
                            <div className={styles.place__metro}>
                                <img src={metro} alt="" />
                                <h3>м. Спасская</h3>
                            </div>
                            <div className={styles.place__date}>
                                <img src={calendar} alt="" />
                                <h4>Запись по договоренности</h4>
                            </div>
                        </div>
                        <button className={styles.button}>Запись по договоренности</button>
                    </div>
                </div>
            </div>
            <div className={styles.footer__licence}>
                <div className={styles.licence__container}>
                    <h1>© 2018-2022 RitmStyle</h1>
                    <h2>Сергей Дубосар</h2>
                    <a href="https://www.figma.com/file/M6BhE1pToNIsn97y4eSwJy/RitmStyle" rel="noreferrer" target="_blank">Оригинал дизайна</a>
                    <a href="https://github.com/Syargik" rel="noreferrer" target="_blank">github account</a>
                </div>
            </div>
        </footer>
    )
}
