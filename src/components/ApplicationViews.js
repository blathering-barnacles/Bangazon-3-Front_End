import { Route } from 'react-router-dom'
import React, { Component } from "react"
import Employee from './employee/employee-component'
import APIManager from '../modules/APIManager';


class ApplicationViews extends Component {

  state = {
    employees: [],
    departments: [],
    computers: [],
    trainingPrograms: [],
    customers: [],
    products: [],
    orders: [],
    paymentTypes: [],
    productTypes: []
  }

  getAll = (resource) => {
    APIManager.getAll(resource)
      .then(data => this.setState({ [resource]: data }))
  }

  render() {

    return (
      <React.Fragment>
        <Route exact path="/employees" render={(props) => {
          return <Employee getAll={this.getAll} employees={this.state.employees} />
        }} />
        <Route exact path="/departments" render={(props) => {
          return <h1>Departments</h1>
        }} />
        <Route exact path="/training-programs" render={(props) => {
          return <h1>Training Programs</h1>
        }} />
        <Route exact path="/computers" render={(props) => {
          return <h1>Computers</h1>
        }} />
        <Route exact path="/customers" render={(props) => {
          return <h1>Customers</h1>
        }} />
        <Route exact path="/orders" render={(props) => {
          return <h1>Order</h1>
        }} />
        <Route exact path="/payment-types" render={(props) => {
          return <h1>Payment Types</h1>
        }} />
        <Route exact path="/products" render={(props) => {
          return <h1>Products</h1>
        }} />
        <Route exact path="/product-types" render={(props) => {
          return <h1>Product Types</h1>
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews