import React, { Component } from 'react'


export default class NavBar extends Component {



  render() {
    return (

      <React.Fragment>
        <nav>
          <h4>Customers</h4>
          <h4>Products</h4>
          <h4>Orders</h4>
          <h4>Departments</h4>
          <h4>Training Programs</h4>
          <h4>Employees</h4>
          <h4>Computers</h4>
        </nav>
      </React.Fragment>
    )
  }
}