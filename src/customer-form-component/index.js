import React, { Component } from 'react'

class CustomerFormComponent extends Component {

  state = {
    firstName: '',
    lastName: '',
    email: '',
    address: '',

  }

  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  render() {
    return (
      <>
        <h3>Add a new customer</h3>
        <input
          type='text'
          id='firstName'
          placeholder="Customers first name"
          onChange={this.handleFieldChange}
        />
        <input
          type='text'
          id='lastName'
          placeholder="Customers last name"
          onChange={this.handleFieldChange}
        />
        <input
          type='text'
          id='email'
          placeholder="Customers email"
          onChange={this.handleFieldChange}
        />
        <input
          type='text'
          id='address'
          placeholder="Customers address"
          onChange={this.handleFieldChange}
        />
        <input
          type='text'
          id='phone'
          placeholder="Customers phone number"
          onChange={this.handleFieldChange}
        />
        <button onClick={() => this.props.create("customers", this.state)}>
          add customer
        </button>
      </>
    )
  }
}

export default CustomerFormComponent