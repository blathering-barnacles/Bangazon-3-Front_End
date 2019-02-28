import React, { Component } from 'react'
import CustomerComponent from './components/customers-component'
import SearchComponent from './components/search-component'
import CustomerFormComponent from './components/customer-form-component'
import './App.css'
import APIManager from './modules/APIManager'
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
  
    setCustomerState = (customers) => this.setState({customers})
  
    create = (resource, newObj) => {
      let formData = new FormData()
      for (let key in newObj) {
        formData.append(key, newObj[key])
      }
  
      fetch(`http://127.0.0.1:8000/api/v1/${resource}/`, {
        method: 'POST',
        body: formData
      })
      .then( newData => newData.json())
      .then( newData => {
        console.log("added?", newData)
        this.getAll(resource)
      })
    }
  
    getAll = (resource) => {
      APIManager.getAll(resource)
        .then(data => this.setState({ [resource]: data }))
    }

  
    render() {
      return (
        <div className="App">
          <h1>Our loyal customers</h1>
          <SearchComponent search={this.search} />
          <CustomerComponent customers={this.state.customers} getAll={this.getAll}/>
          <CustomerFormComponent create={this.create} />
        </div>
      )
    }
  }
  


  // render() {

  //   return (
  //     <React.Fragment>
  //       <h1>Bangazon!</h1>
  //       <Employee getAll={this.getAll} employees={this.state.employees} />
  //     </React.Fragment>
  //   )


  // }

