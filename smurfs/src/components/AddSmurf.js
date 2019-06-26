import React from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

class AddSmurf extends React.Component {
    state = {
        smurf: {
            name: '',
            age: '',
            height: ''
        },
        showAddSmurfForm: false
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

    displayAddSmurf = e => {
        if (e.target.checked) {
            this.setState({ showAddSmurfForm: true })
        } else {
            this.setState({ showAddSmurfForm: false })
        }
    }

    render() {
        return (
            <div>
                Check box to add new Smurf!<input type="checkbox"onClick={e => this.displayAddSmurf(e)}/>
                {this.state.showAddSmurfForm && <form onSubmit={this.onSubmitForm}>
                    <input placeholder="name" type="text" name="name" value={this.state.smurf.name} onChange={this.onInputChange} required/>
                    <input placeholder="age" type="number" name="age" value={this.state.smurf.age} onChange={this.onInputChange} required/>
                    <input placeholder="height" type="text" name="height" value={this.state.smurf.height} onChange={this.onInputChange} required/>
                    <button>add smurf</button>
                </form>}
            </div>
        );
    }
}

export default connect(null, { addSmurf })(AddSmurf);