import React from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

class AddSmurf extends React.Component {
    state = {
        smurf: {
            name: '',
            age: '',
            height: ''
        }
    }

    onSubmitForm = e => {
        e.preventDefault()
        this.props.addSmurf(this.state.smurf)
        this.props.history.push('/smurfs')
    }

    onInputChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <form onSubmit={this.onSubmitForm}>
                <input placeholder="name" type="text" name="name" value={name} onChange={this.onInputChange} required/>
                <input placeholder="age" type="number" name="age" value={age} onChange={this.onInputChange} required/>
                <input placeholder="height" type="text" name="height" value={height} onChange={this.onInputChange} required/>
                <button>add smurf</button>
            </form>
        );
    }
}

export default connect(null, { addSmurf })(AddSmurf);