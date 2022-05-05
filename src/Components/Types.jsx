import React, { Component } from 'react'
import right from '../img/right_color.svg'
import left from '../img/left_color.svg'
import typeimg from '../img/type_img.jpg'


export default class Types extends Component {
    constructor() {
        super()
        this.state = {
           types: {
               1: 'Стандартный RitmStyle',
               2: 'RitmStyle для пар',
               3: 'RitmStyle для беременных',
               4: 'RitmStyle с полным погружением под воду',
               5: 'RitmStyle + красочная подводная фотосессия',
           }
        }
    }
    render() {
        return (
            <div className="types">
                <div className="types__container _container">
                    <div className="text__decoration">
                        <img src={left} alt={left} className="left" />
                        <h1>Сеансы RitmStyle</h1>
                        <img src={right} alt={right} className="right" />
                    </div>
                    <div className="types__block">
                        <div className="item__container">
                            <div className="item__high">
                                <img src={typeimg} alt="" />
                                <h1>{this.state.types[1]}</h1>
                            </div>
                            <div className="item__wide1">
                                <img src={typeimg} alt="" />
                                <h1>{this.state.types[2]}</h1>
                            </div>
                            <div className="item__wide2">
                                <img src={typeimg} alt="" />
                                <h1>{this.state.types[3]}</h1>
                            </div>
                            <div className="item__wide3">
                                <img src={typeimg} alt="" />
                                <h1>{this.state.types[4]}</h1>
                            </div>
                            <div className="item__wide4">
                                <img src={typeimg} alt="" />
                                <h1>{this.state.types[5]}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}