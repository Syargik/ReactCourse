import React, { Component } from 'react'
import styles from '../Biography.module.css';
import Input from '../Input/InputView';
import Button from './ButtonView';

export default class FormView extends Component {
    render() {
        const {addPerson, deletePerson, name, surname, birth, death} = this.props;
        return (
            <div>
                <div className={styles.nav}>
                    <Button onClick={addPerson}>Add</Button>
                    <Button onClick={deletePerson}>Delete</Button>
                </div>
                <div className={styles.inputs}>
                    <Input
                        placeholder='Name'
                        onChange={name} />
                    <Input
                        placeholder='Surname'
                        onChange={surname} />
                    <Input
                        placeholder='Date of birth'
                        onChange={birth} />
                    <Input
                        placeholder='Date of death'
                        onChange={death}
                    />
                </div>
            </div>
        );
    }
}
