import React, { Component } from 'react'
import right from '../../img/right_color.svg'
import left from '../../img/left_color.svg'
import styles from './Home.module.css';

export default class Reviews extends Component {
    constructor() {
        super()
        this.state = {
            names: {
                1: 'Кира Иванова',
                2: 'Александра Дмитриева',
                3: 'Яна Жернова',
                4: 'Владислав Коропец',
            },
            reviews: {
                1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus diam risus morbi nulla dictum. Urna mi orci gravida placerat amet, eu, aliquet facilisis aliquet. Dolor praesent nam ornare fringilla enim nibh donec sit imperdiet. Amet, diam duis eu sit et. Volutpat vestibulum a lectus sed blandit. Venenatis urna mattis eu enim molestie iaculis et aliquet. Velit in pellentesque vestibulum phasellus orci. Fermentum sed phasellus aliquam nulla non aenean. Quisque id nunc, mauris potenti a massa. Fermentum at elit, convallis leo dolor aliquet id elementum. Ullamcorper sociis et cum bibendum in egestas. Diam, urna, sed tempus mollis aliquam elit. Facilisi nam nulla pulvinar mauris vel lacinia venenatis. '
            }
        }
    }
    render() {
        return (
            <div className={styles.reviews}>
                <div className={styles.reviews__container}>
                    <div className={styles.text__decoration}>
                        <img src={left} alt={left} />
                        <h1>Отзывы</h1>
                        <img src={right} alt={right} />
                    </div>
                        <div className={styles.slider}>
                            <div className={styles.slider__container}>
                                <div className={styles.slider__wrapper}>
                                    <div className={styles.slider__items}>
                                        <div className={styles.slider__item}>
                                            <div className={styles.review}>
                                                <h1 className={styles.review__name}>{this.state.names[1]}</h1>
                                                <h2 className={styles.review__text}>{this.state.reviews[1]}</h2>
                                        </div>
                                    </div>
                                    <div className={styles.slider__item}>
                                        <div className={styles.review}>
                                            <h1 className={styles.review__name}>{this.state.names[2]}</h1>
                                            <h2 className={styles.review__text}>{this.state.reviews[1]}</h2>
                                        </div>
                                    </div>
                                    <div className={styles.slider__item}>
                                        <div className={styles.review}>
                                            <h1 className={styles.review__name}>{this.state.names[3]}</h1>
                                            <h2 className={styles.review__text}>{this.state.reviews[1]}</h2>
                                        </div>
                                    </div>
                                    <div className={styles.slider__item}>
                                        <div className={styles.review}>
                                            <h1 className={styles.review__name}>{this.state.names[4]}</h1>
                                            <h2 className={styles.review__text}>{this.state.reviews[1]}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ol className={styles.slider__indicators}>
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
}