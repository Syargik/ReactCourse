import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import styles from './Biography.module.css';
import Table from './Table/Table';

export default class BiographyPage extends Component {
    render() {
        return (
            <div>
                <div className={styles.wrapper}>
                    <Link to='/'>Назад</Link>
                    <Table/>
                </div>
            </div>
        );
    }
}
