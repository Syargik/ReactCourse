import React from 'react'

export default function Types() {
    return (
        <div className="types">
            <div className="types__container _container">
                <div className="text__decoration">
                    <svg className="left">
                        <use xlinkHref="#left"></use>
                    </svg>
                    <h1>Сеансы RitmStyle</h1>
                    <svg className="right">
                        <use xlinkHref="#right"></use>
                    </svg>
                </div>
                <div className="types__block">
                    <div className="item__container">
                        <div className="item__high">
                            <img src={require(`../img/type_img.jpg`)} alt="" />
                            <h1>Стандартный RitmStyle</h1>
                        </div>
                        <div className="item__wide1">
                            <img src={require(`../img/type_img.jpg`)} alt="" />
                            <h1>RitmStyle для пар</h1>
                        </div>
                        <div className="item__wide2">
                            <img src={require(`../img/type_img.jpg`)} alt="" />
                            <h1>RitmStyle для беременных</h1>
                        </div>
                        <div className="item__wide3">
                            <img src={require(`../img/type_img.jpg`)} alt="" />
                            <h1>RitmStyle с полным погружением под воду</h1>
                        </div>
                        <div className="item__wide4">
                            <img src={require(`../img/type_img.jpg`)} alt="" />
                            <h1>RitmStyle + красочная подводная фотосессия</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
