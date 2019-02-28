import React, { Component } from "react"


export default class DepartmentItem extends Component {


  render() {
    return (
      <li>Department: {this.props.department.name} <br></br>
        Budget: {this.props.department.budget}
      </li>
    )
  }
}

