import React from 'react'
import right from '../img/right_color.svg'
import left from '../img/left_color.svg'

export default function Reviews() {
    return (
        <div className="reviews">
            <div className="reviews__container _container">
                <div className="text__decoration">
                    <img src={left} alt={left} />
                    <h1>Отзывы</h1>
                    <img src={right} alt={right} />
                </div>
                <div className="slider">
                    <div className="slider__container">
                        <div className="slider__wrapper">
                            <div className="slider__items">
                                <div className="slider__item">
                                    <div className="review">
                                        <h1 className="review__name">Кира Иванова</h1>
                                        <h2 className="review__text">Lorem ipsum dolor sit amet, consectetur adipiscing
                                            elit. Netus diam risus
                                            morbi nulla dictum. Urna mi orci gravida placerat amet, eu, aliquet
                                            facilisis aliquet. Dolor praesent nam ornare fringilla enim nibh donec sit
                                            imperdiet. Amet, diam duis eu sit et. Volutpat vestibulum a lectus sed
                                            blandit.
                                            Venenatis urna mattis eu enim molestie iaculis et aliquet. Velit in
                                            pellentesque vestibulum phasellus orci. Fermentum sed phasellus aliquam
                                            nulla non aenean. Quisque id nunc, mauris potenti a massa. Fermentum at
                                            elit, convallis leo dolor aliquet id elementum. Ullamcorper sociis et cum
                                            bibendum in egestas. Diam, urna, sed tempus mollis aliquam elit. Facilisi
                                            nam nulla pulvinar mauris vel lacinia venenatis. </h2>
                                    </div>
                                </div>
                                <div className="slider__item">
                                    <div className="review">
                                        <h1 className="review__name">Александра Дмитриева</h1>
                                        <h2 className="review__text">Lorem ipsum dolor sit amet, consectetur adipiscing
                                            elit. Netus diam risus
                                            morbi nulla dictum. Urna mi orci gravida placerat amet, eu, aliquet
                                            facilisis aliquet. Dolor praesent nam ornare fringilla enim nibh donec sit
                                            imperdiet. Amet, diam duis eu sit et. Volutpat vestibulum a lectus sed
                                            blandit.
                                            Venenatis urna mattis eu enim molestie iaculis et aliquet. Velit in
                                            pellentesque vestibulum phasellus orci. Fermentum sed phasellus aliquam
                                            nulla non aenean. Quisque id nunc, mauris potenti a massa. Fermentum at
                                            elit, convallis leo dolor aliquet id elementum. Ullamcorper sociis et cum
                                            bibendum in egestas. Diam, urna, sed tempus mollis aliquam elit. Facilisi
                                            nam nulla pulvinar mauris vel lacinia venenatis. </h2>
                                    </div>
                                </div>
                                <div className="slider__item">
                                    <div className="review">
                                        <h1 className="review__name">Яна Жернова</h1>
                                        <h2 className="review__text">Lorem ipsum dolor sit amet, consectetur adipiscing
                                            elit. Netus diam risus
                                            morbi nulla dictum. Urna mi orci gravida placerat amet, eu, aliquet
                                            facilisis aliquet. Dolor praesent nam ornare fringilla enim nibh donec sit
                                            imperdiet. Amet, diam duis eu sit et. Volutpat vestibulum a lectus sed
                                            blandit.
                                            Venenatis urna mattis eu enim molestie iaculis et aliquet. Velit in
                                            pellentesque vestibulum phasellus orci. Fermentum sed phasellus aliquam
                                            nulla non aenean. Quisque id nunc, mauris potenti a massa. Fermentum at
                                            elit, convallis leo dolor aliquet id elementum. Ullamcorper sociis et cum
                                            bibendum in egestas. Diam, urna, sed tempus mollis aliquam elit. Facilisi
                                            nam nulla pulvinar mauris vel lacinia venenatis. </h2>
                                    </div>
                                </div>
                                <div className="slider__item">
                                    <div className="review">
                                        <h1 className="review__name">Владислав Коропец</h1>
                                        <h2 className="review__text">Lorem ipsum dolor sit amet, consectetur adipiscing
                                            elit. Netus diam risus
                                            morbi nulla dictum. Urna mi orci gravida placerat amet, eu, aliquet
                                            facilisis aliquet. Dolor praesent nam ornare fringilla enim nibh donec
                                            sit
                                            imperdiet. Amet, diam duis eu sit et. Volutpat vestibulum a lectus sed
                                            blandit.
                                            Venenatis urna mattis eu enim molestie iaculis et aliquet. Velit in
                                            pellentesque vestibulum phasellus orci. Fermentum sed phasellus aliquam
                                            nulla non aenean. Quisque id nunc, mauris potenti a massa. Fermentum at
                                            elit, convallis leo dolor aliquet id elementum. Ullamcorper sociis et
                                            cum
                                            bibendum in egestas. Diam, urna, sed tempus mollis aliquam elit.
                                            Facilisi
                                            nam nulla pulvinar mauris vel lacinia venenatis. </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ol className="slider__indicators">
                        <li data-slide-to="0"></li>
                        <li data-slide-to="1"></li>
                        <li data-slide-to="2"></li>
                        <li data-slide-to="3"></li>
                    </ol>
                </div>
            </div>
        </div>
    )
}
