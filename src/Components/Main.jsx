import React from 'react'
import right from '../img/right.svg'
import left from '../img/left.svg'
import './Home.css'

export default function Main() {
    return (
        <div className="main">
            <div className="main__container _container">
                <div className="main__img">
                    <div className="main__text">
                        <div className="text__decoration">
                            <img src={left} alt={left} />
                            <h1>Укрепление здоровья</h1>
                            <img src={right} alt={right} />
                        </div>
                        <h2>Акватерапия
                            RitmStyle</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
