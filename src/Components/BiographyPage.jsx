import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import styles from './Biography.module.css';
import Tablet from './Tablet';

export default class BiographyPage extends Component {
    state = {}
    render() {
        return (
            <div>
                <div className={styles.wrapper}>
                    <Link to='/'>Назад</Link>
                    <Tablet/>
                </div>
            </div>
        );
    }
}
