import React, { Component } from 'react';
import OrderComponent from './components/order/order-component'
import DepartmentComponent from './components/department/department-component'
import DepartmentFormComponent from './components/department/department-form-component'
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

  setOrderState = (orders) => this.setState({orders})

  create = (resource, newObj) => {
    let formData = new FormData()
    for (let key in newObj) {
        formData.append(key, newObj[key])
    }

  fetch(`${this.state.apiUrl}${resource}/`, {
      method: 'POST',
      body: formData
  })
  .then( newData => newData.json())
  .then( newData => {
  //   console.log("added?", newData)
      this.getAll(resource)
  })
  }

delete = (resource, evt) => {
  fetch(`${this.state.apiUrl}${resource}/${evt.target.id}`,{
      method: `DELETE`
  }).then(() => this.getAll(resource))
  }




  render(){

    return(
      <>
            <h1>Bangazon!</h1>
            <Employee getAll={this.getAll} employees={this.state.employees} />
            <OrderComponent orders={this.state.orders} getAll={this.getAll} delete={this.delete}/>
            <DepartmentComponent orders={this.state.departments} getAll={this.getAll} delete={this.delete}/>
            <DepartmentFormComponent create={this.create} />
            </>
        )
    }
  }
