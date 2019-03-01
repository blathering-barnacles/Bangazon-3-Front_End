
import React, { Component } from "react"
import CustomerItem from "../customer-item"

class CustomerComponent extends Component {

  componentDidMount() {
    this.props.getAll("customers")
  }

  render() {
    const customerNode = this.props.customers.map( (customer) => {
      return (<CustomerItem customer={customer} key={customer.id} />)
    })

    return (
      <div className="customer-container">
        <h2>A list of customers</h2>
        <ul>{customerNode}</ul>
      </div>
    )
  }
}

export default CustomerComponent