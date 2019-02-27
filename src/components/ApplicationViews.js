import { Route, Redirect } from 'react-router-dom'
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
          return <p>Departments</p>
        }} />
        <Route exact path="/training-programs" render={(props) => {
          return <p>Training Programs</p>
        }} />
        <Route exact path="/computers" render={(props) => {
          return <p>Computers</p>
        }} />
        <Route exact path="/customers" render={(props) => {
          return <p>Customers</p>
        }} />
        <Route exact path="/orders" render={(props) => {
          return <p>Order</p>
        }} />
        <Route exact path="/payment-types" render={(props) => {
          return <p>Payment Types</p>
        }} />
        <Route exact path="/products" render={(props) => {
          return <p>Products</p>
        }} />
        <Route exact path="/product-types" render={(props) => {
          return <p>Product Types</p>
        }} />






      </React.Fragment>
    )
  }
}

export default ApplicationViews