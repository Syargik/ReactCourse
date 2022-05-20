import React, { Component } from 'react'
import right from '../../img/right_color.svg'
import left from '../../img/left_color.svg'
import styles from './Home.module.css';

export default class About extends Component {
    constructor() {
        super()
        this.state = {
            types: {
                1: 'RitmStyle массаж',
                2: 'RitmStyle гидротерапия',
            },
            descriptions: {
                1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus diam risus morbi nulla dictum. Urna mi orci gravida placerat amet, eu, aliquet facilisis aliquet. Dolor praesent nam ornare fringilla enim nibh donec sit imperdiet. Amet, diam duis eu sit et. Volutpat vestibulum a lectus sed blandit. Venenatis urna mattis eu enim molestie iaculis et aliquet. Velit in pellentesque vestibulum phasellus orci. Fermentum sed phasellus aliquam nulla non aenean. Quisque id nunc, mauris potenti a massa. Fermentum at elit, convallis leo dolor aliquet id elementum. Ullamcorper sociis et cum bibendum in egestas. Diam, urna, sed tempus mollis aliquam elit. Facilisi nam nulla pulvinar mauris vel lacinia venenatis. '
            }
        }
    }
    render() {
        return (
            <div className="about">
                <div className={styles.about__container}>
                    <div className={styles.text__decoration}>
                        <img src={left} alt={left} />
                        <h1>Об RitmStyle</h1>
                        <img src={right} alt={right} />
                    </div>
                    <div className={styles.about__content}>
                        <div className={styles.about__item}>
                            <div className={styles.about__text}>
                                <h1>{this.state.types[1]}</h1>
                                <h2>{this.state.descriptions[1]}</h2>
                            </div>
                            <div>
                                <div className={styles.about__image}>
                                </div>
                            </div>
                        </div>
                        <div className={styles.about__item}>
                            <div>
                                <div className={styles.about__image}>
                                </div>
                            </div>
                            <div className={styles.about__text}>
                                <h1>{this.state.types[2]}</h1>
                                <h2>{this.state.descriptions[1]}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}