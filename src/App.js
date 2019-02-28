import React, { Component } from 'react';
import ApplicationViews from './components/ApplicationViews'


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
  


  


  render() {

    return (
      <React.Fragment>
        <h1>Welcome to Bangazon!</h1>
        <ApplicationViews />
      </React.Fragment>
    )
  }

}
