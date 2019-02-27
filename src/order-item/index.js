import React, { Component } from "react"

export default class OrderItem extends Component {
  render() {
    return (
    <>
    <li>{this.props.order.buyer_id}
     {/* <button key={`del-${this.props.order.id}`} id={this.props.order.id} onClick={evt => this.props.delete("orders", evt)}>Delete</button> */}
     </li>

        </>
        )
  }
}
