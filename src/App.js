import React, { Component } from 'react';
import TrainingProgram from './components/TrainingProgramComponent/index'
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
    productTypes: [],
    apiUrl: "http://localhost:8000/api/v1/"
  }

  getAll = (resource) => {
    APIManager.getAll(resource)
      .then(data => this.setState({ [resource]: data }))
  }

  createNewProgram = (resource, newObj) => {
    APIManager.create(resource, newObj)
    .then((newData) => {
      console.log(newData)
      this.getAll(resource)
    })
  }


  editThisProgram = (resource, obj, id) => {
    APIManager.edit(resource, obj, id)
      // .then(newData => newData.json())
      .then(() => this.getAll(resource))
  }

  deleteThisProgram = (resource, id) => {
    APIManager.delete(resource, id)
    .then(() => this.getAll(resource))
  }




  render() {

    return (
      <React.Fragment>
        <h1>Bangazon!</h1>
        <Employee getAll={this.getAll} employees={this.state.employees} />
        <TrainingProgram
          getTrainingPrograms={this.getTrainingPrograms}
          trainingPrograms={this.state.trainingPrograms}
          getAll={this.getAll}
          createNewProgram={this.createNewProgram}
          editThisProgram={this.editThisProgram}
          deleteThisProgram={this.deleteThisProgram}
        />
      </React.Fragment>
    )
  }
}
