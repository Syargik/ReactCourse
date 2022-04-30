import React from 'react'
import right from '../img/right_color.svg'
import left from '../img/left_color.svg'

export default function Price() {
    return (
        <div className="price">
            <div className="price__container _container">
                <div className="text__decoration">
                    <img src={left} alt={left} />
                    <h1>Стоимость сеансов</h1>
                    <img src={right} alt={right} />
                </div>
                <div className="prices">
                    <div className="prices__text">
                        <div className="prices__item">
                            <div className="price__item">
                                <div className="price__left">
                                <img src={left} alt={left}/>
                                    <h1>RitmStyle с погружением</h1>
                                </div>
                                <div className="price__right">
                                    <h1>1000р.</h1>
                                </div>
                            </div>
                            <div className="price__item">
                                <div className="price__left">
                                <img src={left} alt={left}/>
                                    <h1>Абонемент на RitmStyle</h1>
                                </div>
                                <div className="price__right">
                                    <h1>5500р.</h1>
                                </div>
                            </div>
                            <div className="price__item">
                                <div className="price__left">
                                <img src={left} alt={left}/>
                                    <h1>RitmStyle для пар</h1>
                                </div>
                                <div className="price__right">
                                    <h1>6000р.</h1>
                                </div>
                            </div>
                            <div className="price__item">
                                <div className="price__left">
                                <img src={left} alt={left}/>
                                    <h1>RitmStyle для беременных</h1>
                                </div>
                                <div className="price__right">
                                    <h1>13500р.</h1>
                                </div>
                            </div>
                            <div className="price__item">
                                <div className="price__left">
                                <img src={left} alt={left}/>
                                    <h1>RitmStyle + фотосессия</h1>
                                </div>
                                <div className="price__right">
                                    <h1>11500р.</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="prices__right">
                        <div className="price__image">
                        </div>
                        <h1 className="gift">Подарочный сертификат</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
