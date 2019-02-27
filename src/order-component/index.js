import React, { Component } from "react"
import OrderItem from "../order-item"

export default class OrderComponent extends Component {

  componentDidMount() {
    this.props.getAll("orders")
  }

  render() {
    const orderNode = this.props.orders.map( (order) => {
      return (<OrderItem order={order} delete={this.props.delete} key={order.id} />)
    })

    return (
      <div className="order-container">
        <h2>A list of orders</h2>
        <ul>{orderNode}</ul>
      </div>
    )
  }
}
