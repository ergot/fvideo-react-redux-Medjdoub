import React from 'react'


class Form extends React.Component {
    state = {
        name:'',
        quantity: 0
    };

    handleSubmit (event) {
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <h3>Ajouter des articles à acheter</h3>
                <form onSubmit={this.handleSubmit}>
                    <input type="number" placeholder="quantité"
                           value={this.state.quantity} onChange={ (event)=>{this.setState({quantity:event.target.value})}}/>
                    <input type="text" placeholder="article"
                           value={this.state.name} onChange={ (event)=>{this.setState({name:event.target.value})}}/>
                    <button type="submit">ajouter</button>
                </form>
            </div>
        )
    }
}

export default Form;