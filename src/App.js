import React, { Component } from 'react';
import TrainingProgram from './components/TrainingProgramComponent/index'
// import './App.css';
import APIManager from './modules/APIManager';
import Employee from './components/employee/employee-component'


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
      </React.Fragment>
    )


  }



}
