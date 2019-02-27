
import React, { Component } from "react"

export default class CustomerItem extends Component {
  render() {
    return (<li>{this.props.customer.firstName} {this.props.customer.lastName}</li>)
  }
}