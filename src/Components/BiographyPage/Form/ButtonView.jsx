import React, { Component } from 'react'
import styles from '../Biography.module.css';

export default class Button extends Component {
    render() { 
        const {onClick} = this.props
        return (
            <button className={styles.btn} onClick={onClick}>{this.props.children}</button>
        );
    }
}
