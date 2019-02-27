import React, { Component } from 'react'
import CustomerComponent from './customers-component'
import SearchComponent from './search-component'
import CustomerFormComponent from './customer-form-component'
import './App.css'

export default class App extends Component {


    state = {
      customers: [],
      apiUrl: 'http://127.0.0.1:8000/api/v1/'
    }
  
    setCustomerState = (customers) => this.setState({customers})
  
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
        console.log("added?", newData)
        this.getAll(resource)
      })
    }
  
    // TODO: This API logic should end up in a manager of some sort
    getAll = (resource, keyword=null) => {
      let url = `${this.state.apiUrl}${resource}/`
      if (keyword)
        url += keyword
  
      fetch(url)
      .then( response => response.json())
      .then( data => {
        console.log("customer list", data)
        this.setState({[resource]: data})
      })
      .catch(err => console.log("Uh Oh!", err))
    }
  
    search = (resource, keyword) => {
      let query = `?search=${keyword}`
      this.getAll(resource, query)
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
  
