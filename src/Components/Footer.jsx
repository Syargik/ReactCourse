import React from 'react'

export default function Footer() {
    return (
        <footer>
            <div className="footer__container _container">
                <div className="map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1338502.247942618!2d30.02736222008507!3d60.01844362009769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696378cc74a65ed%3A0x6dc7673fab848eff!2z0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LMsINCg0L7RgdGB0LjRjw!5e1!3m2!1sru!2sua!4v1650288081551!5m2!1sru!2sua"
                        width="900"
                        height="600"
                        styles={{ border: "0" }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade" />
                </div>
                <div className="on__map">
                    <div className="map__item">
                        <h1>Бассейн WorkclassName</h1>
                        <div className="place">
                            <div className="place__location">
                                <img src="./img/carbon_location-filled.png" alt="" />
                                <h2>Невский 140</h2>
                            </div>
                            <div className="place__metro">
                                <img src="./img/metro.png" alt="" />
                                <h3>м. Спасская</h3>
                            </div>
                            <div className="place__date">
                                <img src="./img/bi_calendar-week-fill.png" alt="" />
                                <h4>Запись по договоренности</h4>
                            </div>
                        </div>
                        <button className="button">Запись по договоренности</button>
                    </div>
                    <div className="map__item">
                        <h1>Бассейн WorkclassName</h1>
                        <div className="place">
                            <div className="place__location">
                                <img src="./img/carbon_location-filled.png" alt="" />
                                <h2>Невский 140</h2>
                            </div>
                            <div className="place__metro">
                                <img src="./img/metro.png" alt="" />
                                <h3>м. Спасская</h3>
                            </div>
                            <div className="place__date">
                                <img src="./img/bi_calendar-week-fill.png" alt="" />
                                <h4>Запись по договоренности</h4>
                            </div>
                        </div>
                        <button className="button">Запись по договоренности</button>
                    </div>
                </div>
            </div>
            <div className="footer__licence">
                <div className="licence__container _container">
                    <h1>© 2018-2022 RitmStyle</h1>
                    <h2>Сергей Дубосар</h2>
                    <a href="https://www.figma.com/file/M6BhE1pToNIsn97y4eSwJy/RitmStyle" target="_blank">Оригинал дизайна</a>
                    <a href="https://github.com/Syargik" target="_blank">github account</a>
                </div>
            </div>
        </footer>
    )
}
