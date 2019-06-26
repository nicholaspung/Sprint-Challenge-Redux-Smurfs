import React from 'react';
import { connect } from 'react-redux';
import { updateSmurf, deleteSmurf } from '../actions';

class Smurf extends React.Component {
    state = {
        smurf: this.props.smurf,
        newSmurf: this.props.smurf,
        showInputForms: false
    }

    changeToInputForms = e => {
        e.preventDefault()
        this.setState(prevState => ({ 
            showInputForms: !prevState.showInputForms,
            newSmurf: prevState.smurf
        }))
    }

    onInputChange = e => {
        e.preventDefault()
        this.setState({ 
            newSmurf: {
                ...this.state.newSmurf,
                [e.target.name]: e.target.value
            }
        })
    }

    updateSmurfs = e => {
        this.props.updateSmurf(this.state.newSmurf)
    }

    deleteSmurf = () => {
        this.props.deleteSmurf(this.state.smurf)
    }

    render() {
        return (
            <div>
                {this.state.showInputForms ? (
                    <form onSubmit={e => this.updateSmurfs(e)}>
                        <div>
                            <input placeholder="name" type="text" name="name" value={this.state.newSmurf.name} onChange={this.onInputChange} required/>
                            <input placeholder="age" type="number" name="age" value={this.state.newSmurf.age} onChange={this.onInputChange} required/>
                            <input placeholder="height" type="text" name="height" value={this.state.newSmurf.height} onChange={this.onInputChange} required/>
                        </div>
                        <div>
                            <button>finish update</button>
                            <button onClick={e => this.changeToInputForms(e)}>cancel update</button>
                        </div>
                    </form>) :
                    (<div>
                        Name: {this.state.smurf.name},
                        Age: {this.state.smurf.age},
                        Height: {this.state.smurf.height}
                        <button onClick={this.changeToInputForms}>update me</button>
                        <button onClick={this.deleteSmurf}>delete me</button>
                    </div>)}
            </div>
        )
    }
}

export default connect(null, { updateSmurf, deleteSmurf })(Smurf);