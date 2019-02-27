import React, { Component } from 'react'

export default class OrderFormComponent extends Component {

  state = {
    buyer: '',
    paymentType: ''
  }

  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  render() {
    return (
      <>
        <h3>Add a new order to the collection!</h3>
        <input
          type='text'
          id='title'
          placeholder="order title"
          onChange={this.handleFieldChange}
        />
        <input
          type='text'
          id='year'
          placeholder="year released"
          onChange={this.handleFieldChange}
        />
        <button onClick={() => this.props.create("orders", this.state)}>
          save order
        </button>
      </>
    )
  }
}
