import React from 'react'
import right from '../img/right_color.svg'
import left from '../img/left_color.svg'
import typeimg from '../img/type_img.jpg'

export default function Types() {
    return (
        <div className="types">
            <div className="types__container _container">
                <div className="text__decoration">
                    <img src={left} alt={left} className="left"/>
                    <h1>Сеансы RitmStyle</h1>
                    <img src={right} alt={right} className="right"/>
                </div>
                <div className="types__block">
                    <div className="item__container">
                        <div className="item__high">
                            <img src={typeimg} alt="" />
                            <h1>Стандартный RitmStyle</h1>
                        </div>
                        <div className="item__wide1">
                            <img src={typeimg} alt="" />
                            <h1>RitmStyle для пар</h1>
                        </div>
                        <div className="item__wide2">
                            <img src={typeimg} alt="" />
                            <h1>RitmStyle для беременных</h1>
                        </div>
                        <div className="item__wide3">
                            <img src={typeimg} alt="" />
                            <h1>RitmStyle с полным погружением под воду</h1>
                        </div>
                        <div className="item__wide4">
                            <img src={typeimg} alt="" />
                            <h1>RitmStyle + красочная подводная фотосессия</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
