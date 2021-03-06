import React, { Component } from 'react'
import right from '../../img/right_color.svg'
import left from '../../img/left_color.svg'
import styles from './Home.module.css';

export default class Price extends Component {
    constructor() {
        super()
        this.state = {
            types: {
                1: 'Стандартный RitmStyle',
                2: 'RitmStyle для пар',
                3: 'RitmStyle для беременных',
                4: 'RitmStyle с полным погружением под воду',
                5: 'RitmStyle + красочная подводная фотосессия'
            },
            prices: {
                1: '1000р.',
                2: '5500р.',
                3: '6000р.',
                4: '13500р.',
                5: '11500р.',
            }
        }
    }
  render() {
    return (
        <div className="price">
        <div className={styles.price__container}>
            <div className={styles.text__decoration}>
                <img src={left} alt={left} />
                <h1>Стоимость сеансов</h1>
                <img src={right} alt={right} />
            </div>
            <div className={styles.prices}>
                <div className={styles.prices__text}>
                    <div className={styles.prices__item}>
                        <div className={styles.price__item}>
                            <div className={styles.price__left}>
                            <img src={left} alt={left}/>
                                <h1>{this.state.types[1]}</h1>
                            </div>
                            <div className={styles.price__right}>
                                <h1>{this.state.prices[1]}</h1>
                            </div>
                        </div>
                        <div className={styles.price__item}>
                            <div className={styles.price__left}>
                            <img src={left} alt={left}/>
                                <h1>{this.state.types[2]}</h1>
                            </div>
                            <div className={styles.price__right}>
                                <h1>{this.state.prices[2]}</h1>
                            </div>
                        </div>
                        <div className={styles.price__item}>
                            <div className={styles.price__left}>
                            <img src={left} alt={left}/>
                                <h1>{this.state.types[3]}</h1>
                            </div>
                            <div className={styles.price__right}>
                                <h1>{this.state.prices[3]}</h1>
                            </div>
                        </div>
                        <div className={styles.price__item}>
                            <div className={styles.price__left}>
                            <img src={left} alt={left}/>
                                <h1>{this.state.types[4]}</h1>
                            </div>
                            <div className={styles.price__right}>
                                <h1>{this.state.prices[4]}</h1>
                            </div>
                        </div>
                        <div className={styles.price__item}>
                            <div className={styles.price__left}>
                            <img src={left} alt={left}/>
                                <h1>{this.state.types[5]}</h1>
                            </div>
                            <div className={styles.price__right}>
                                <h1>{this.state.prices[5]}</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.prices__right}>
                    <div className={styles.price__image}>
                    </div>
                    <h1 className={styles.gift}>Подарочный сертификат</h1>
                </div>
            </div>
        </div>
    </div>
    )
  }
}