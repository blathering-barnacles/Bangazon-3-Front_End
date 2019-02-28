import React, { Component } from 'react';
import APIManager from './modules/APIManager';
import Employee from './components/employee/employee-component'
import Products from './components/productsComponent/index'


export default class App extends Component {

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
        <h1>Bangazon!</h1>
        <Employee getAll={this.getAll} employees={this.state.employees} />
        <Products getAll={this.getAll} customers={this.state.customers} productTypes={this.state.productTypes} products={this.state.products} createNew={this.createNew} editThis={this.editThis}/>
      </React.Fragment>
    )


  }



}
