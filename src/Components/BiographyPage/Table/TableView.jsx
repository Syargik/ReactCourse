import React, { Component } from 'react'
import styles from '../Biography.module.css';
import Form from '../Form/Form';


export default class TableView extends Component {
    render() {
        const {deleteElement, sortByName, sortBySurname, mySortByBirth, mySortByDeath} = this.props;
        return (
            <div>
                <Form
                    addPerson={this.props.addPerson}
                    deletePerson={this.props.deletePerson} />
                <table className={styles.table__container}>
                    <thead>
                        <tr>
                            <th onClick={() => sortByName()}>Name</th>
                            <th onClick={() => sortBySurname()}>Surname</th>
                            <th onClick={() => mySortByBirth()}>Date of birth</th>
                            <th onClick={() => mySortByDeath()}>Date of death</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.biographies.map((el, index) =>
                            <tr key={index}>
                                <td>{el.info.name}</td>
                                <td>{el.info.surname}</td>
                                <td>{el.events.birthday}</td>
                                <td>{el.events.death}</td>
                                <td>
                                    <button onClick={() => deleteElement(index)}>Удалить</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}