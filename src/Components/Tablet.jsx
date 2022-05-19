import React, { Component } from 'react'
import styles from './Biography.module.css';

export default class Tablet extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            surname: '',
            birth: '',
            death: '',
            biographies: [
                {
                    info: {
                        name: 'Serhii',
                        surname: 'Dubosar'
                    },
                    events: {
                        birthday: '2003',
                        death: 'none'
                    }
                }
            ]
        }
    }


    addPerson() {
        this.setState((state) => ({
            biographies: [
                ...state.biographies,
                {
                    info: {
                        name: this.state.name,
                        surname: this.state.surname
                    },
                    events: {
                        birthday: this.state.birthday,
                        death: this.state.death
                    }
                }
            ]
        }))
    }

    deletePerson() {
        this.setState((state) => ({
            biographies: state.biographies.slice(0, -1)
        }))
    }

    deleteElement(index) {
        this.setState((state) => {
            let array = [...state.biographies]
            array.splice(index, 1)
            return { biographies: array }
        })
    }

    sortByName() {
        this.setState((state) => ({
            biographies: [...state.biographies].sort((a, b) => (a.info.name.toLowerCase() > b.info.name.toLowerCase()) ? 1 : -1)
        }))
    }

    sortBySurname() {
        this.setState((state) => ({
            biographies: [...state.biographies].sort((a, b) => (a.info.surname.toLowerCase() > b.info.surname.toLowerCase()) ? 1 : -1)
        }))
    }

    mySortByBirth() {
        this.setState((state) => {
            const arr = [...state.biographies];
            for (var i = 0, endI = arr.length - 1; i < endI; i++) {
                let wasSwap = false;
                for (var j = 0, endJ = endI - i; j < endJ; j++) {
                    if (+arr[j].events.birthday > +arr[j + 1].events.birthday) {
                        let swap = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = swap;
                        wasSwap = true;
                    }
                }
                if (!wasSwap) break;
            }
            return {biographies: arr};
        })
    }

    mySortByDeath() {
        this.setState((state) => {
            const arr = [...state.biographies];
            for (var i = 0, endI = arr.length - 1; i < endI; i++) {
                let wasSwap = false;
                for (var j = 0, endJ = endI - i; j < endJ; j++) {
                    if (+arr[j].events.death > +arr[j + 1].events.death) {
                        let swap = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = swap;
                        wasSwap = true;
                    }
                }
                if (!wasSwap) break;
            }
            return {biographies: arr};
        })
    }

    render() {
        return (
            <div>
                <div className={styles.nav}>
                    <button className={styles.btn} onClick={() => this.addPerson()}>Add</button>
                    <button className={styles.btn} onClick={() => this.deletePerson()}>Delete</button>
                </div>
                <div className={styles.inputs}>
                    <input
                        type="text"
                        placeholder='Name'
                        id='test'
                        onChange={(event) => this.setState({ name: (event.target.value) })}
                    />
                    <input
                        type="text"
                        placeholder='Surname'
                        id='test'
                        onChange={(event) => this.setState({ surname: (event.target.value) })}
                    />
                    <input
                        type="text"
                        placeholder='Date of birth'
                        id='test'
                        onChange={(event) => this.setState({ birthday: (event.target.value) })}
                    />
                    <input
                        type="text"
                        placeholder='Date of death'
                        id='test'
                        onChange={(event) => this.setState({ death: (event.target.value) })}
                    />
                </div>
                <table className={styles.table__container}>
                    <thead>
                        <tr>
                            <th onClick={() => this.sortByName()}>Name</th>
                            <th onClick={() => this.sortBySurname()}>Surname</th>
                            <th onClick={() => this.mySortByBirth()}>Date of birth</th>
                            <th onClick={() => this.mySortByDeath()}>Date of death</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.biographies.map((el, index) =>
                            <tr key={index}>
                                <td>{el.info.name}</td>
                                <td>{el.info.surname}</td>
                                <td>{el.events.birthday}</td>
                                <td>{el.events.death}</td>
                                <td>
                                    <button onClick={() => this.deleteElement(index)}>Удалить</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}