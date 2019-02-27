// import React, { Component } from "react"
// import DepartmentItem from "../order-item"

// export default class DepartmentComponent extends Component {

//     state = {
//         customers: []
//     }


//   componentDidMount() {
//       this.props.getAll("orders")
//       this.props.getAll("customers")
//   }

//   render() {
//     const orderNode = this.props.orders.map( (order) => {
//       return (<OrderItem order={order} delete={this.props.delete} key={order.id}  />)
//     })

//     return (
//       <div className="order-container">
//       {/* <button onClick={this.consoleLog}>console log</button> */}
//         <h2>A list of orders</h2>
//         <ul>{orderNode}</ul>
//       </div>
//     )
//   }
// }
