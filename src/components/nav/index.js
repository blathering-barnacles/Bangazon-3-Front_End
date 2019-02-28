import React, { Component } from 'react'
import './index.css'


export default class NavBar extends Component {



  render() {
    return (

      <React.Fragment>
        <nav className="navBar">
          <a href="http://localhost:3000/customers"><h4>Customers</h4></a>
          <a href="http://localhost:3000/products"><h4>Products</h4></a>
          <a href="http://localhost:3000/product-types"><h4>Computers</h4></a>
          <a href="http://localhost:3000/orders"><h4>Orders</h4></a>
          <a href="http://localhost:3000/payment-types"><h4>Computers</h4></a>
          <a href="http://localhost:3000/departments"><h4>Departments</h4></a>
          <a href="http://localhost:3000/training-programs"><h4>Training Programs</h4></a>
          <a href="http://localhost:3000/employees"><h4>Employees</h4></a>
          <a href="http://localhost:3000/computers"><h4>Computers</h4></a>
        </nav>
      </React.Fragment>
    )
  }
}