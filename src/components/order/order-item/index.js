import React, { Component } from "react"
import APIManager from '../../../modules/APIManager';


export default class OrderItem extends Component {

  state = {
    buyer: {},
    payment: {}
  }

  getBuyerDetail = () => {
    fetch(this.props.order.buyer)
      .then(response => response.json())
      .then(data => {
        this.setState({ buyer: data })
      })
  }
  getPaymentDetail = () => {
    fetch(this.props.order.paymentType)
      .then(response => response.json())
      .then(data => {
        this.setState({ payment: data })
      })
  }

  componentDidMount() {
    this.getBuyerDetail()
    this.getPaymentDetail()
  }
  render() {
    return (
      <>
        <li>Order #{this.props.order.id} {this.state.buyer.firstName} {this.state.buyer.lastName} {this.state.payment.name} {this.state.payment.cardNum}
          <button key={`del-${this.props.order.id}`} id={this.props.order.id} onClick={evt => this.props.delete("orders", evt)}>Delete</button>
        </li>

      </>
    )
  }
}
