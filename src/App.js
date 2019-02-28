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


  render() {

    return (
      <React.Fragment>
        <h1>Bangazon!</h1>
        <Employee getAll={this.getAll} employees={this.state.employees} />
        <Products getAll={this.getAll} products={this.state.products}/>
      </React.Fragment>
    )


  }



}
