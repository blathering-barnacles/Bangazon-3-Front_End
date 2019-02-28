import { Route } from 'react-router-dom'
import React, { Component } from "react"
import Employee from './employee/employee-component'
import Products from './productsComponent/index'
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

  createNew = (resource, newObj) => {
    APIManager.create(resource, newObj)
    .then((newData) => {
      console.log(newData)
      this.getAll(resource)
    })
  }


  editThis = (resource, obj, id) => {
    APIManager.edit(resource, obj, id)
      .then(() => this.getAll(resource))
  }

  deleteThis = (resource, id) => {
    APIManager.delete(resource, id)
    .then(() => this.getAll(resource))
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
          return ( <Products getAll={this.getAll}
            customers={this.state.customers}
            productTypes={this.state.productTypes}
            products={this.state.products}
            createNew={this.createNew}
            editThis={this.editThis}/>)
        }} />
        <Route exact path="/product-types" render={(props) => {
          return <h1>Product Types</h1>
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews