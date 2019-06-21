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
        this.setState({
            smurf: {
                name: '',
                age: '',
                height: ''
            }
        })
    }

    onInputChange = e => {
        this.setState({ 
            smurf: {
                ...this.state.smurf,
                [e.target.name]: e.target.value 
            }
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmitForm}>
                <input placeholder="name" type="text" name="name" value={this.state.smurf.name} onChange={this.onInputChange} required/>
                <input placeholder="age" type="number" name="age" value={this.state.smurf.age} onChange={this.onInputChange} required/>
                <input placeholder="height" type="text" name="height" value={this.state.smurf.height} onChange={this.onInputChange} required/>
                <button>add smurf</button>
            </form>
        );
    }
}

export default connect(null, { addSmurf })(AddSmurf);