import React, { Component } from 'react'
import FormView from './FormView';

export default class Form extends Component {
    state = { 
        name: '',
        surname: '',
        birth: '',
        death: ''
     }
    render() { 
        const {addPerson, deletePerson} = this.props
        return (
            <FormView 
            name={(event) => this.setState({ name: (event.target.value) })} 
            surname={(event) => this.setState({ surname: (event.target.value) })} 
            birth={(event) => this.setState({ birthday: (event.target.value) })}
            death={(event) => this.setState({ death: (event.target.value) })}
            addPerson={() => addPerson(this.state)}
            deletePerson={deletePerson}/>
        );
    }
}
