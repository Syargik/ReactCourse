import React, { Component } from 'react'

export default class Input extends Component {
    render() {
        const {placeholder, onChange} = this.props
        return (
            <input
                placeholder={placeholder}
                onChange={onChange}
                type="text"
            />
        );
    }
}