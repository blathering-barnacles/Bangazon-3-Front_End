import React, { Component } from "react"
import DepartmentItem from "../department-item"

export default class DepartmentComponent extends Component {

    // state = {
    //     customers: []
    // }

  componentDidMount() {
      this.props.getAll("departments")
  }

  render() {
    const departmentNode = this.props.departments.map( (department) => {
      return (<DepartmentItem department={department} key={department.id}  />)
    })

    return (
      <div className="department-container">
      {/* <button onClick={this.consoleLog}>console log</button> */}
        <h2>A list of departments</h2>
        <ul>{departmentNode}</ul>
      </div>
    )
  }
}
