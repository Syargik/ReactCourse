import { Component } from 'react'
import TableView from './TableView'

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

    addPerson ({name, surname, birthday, death}) {
        this.setState((state) => ({
            biographies: [
                ...state.biographies,
                {
                    info: {
                        name,
                        surname
                    },
                    events: {
                        birthday,
                        death
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
            return { biographies: arr };
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
            return { biographies: arr };
        })
    }

    render() {
        return (
            <TableView
                biographies={this.state.biographies}
                addPerson={this.addPerson.bind(this)}
                deletePerson={() => this.deletePerson()} 
                deleteElement={() => this.deleteElement()}
                sortByName={() => this.sortByName()}
                sortBySurname={() => this.sortBySurname()}
                mySortByBirth={() => this.mySortByBirth()}
                mySortByDeath={() => this.mySortByDeath()}/>
        )
    }
}