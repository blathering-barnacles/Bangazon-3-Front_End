import React, { Component } from 'react';
import OrderFormComponent from './order-form-component'
import OrderComponent from './order-component'
// import './App.css';

export default class App extends Component {

    state = {
        orders: [],
        apiUrl: 'http://127.0.0.1:8000/api/v1/'
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

    // delete = (resource, evt) => {
    // fetch(`${this.state.apiUrl}${resource}/${evt.target.id}`,{
    //     method: `Delete`
    // }).then(() => this.getAll(resource))
    // }

    // TODO: This API logic should end up in a manager of some sort
    getAll = (resource, keyword=null) => {
    let url = `${this.state.apiUrl}${resource}/`
    if (keyword)
        url += keyword

    fetch(url)
    .then( response => response.json())
    .then( data => {
    //   console.log("movies list", data)
        this.setState({[resource]: data})
    })
    .catch(err => console.log("Oops!", err))
    }


    render(){

        return(
            <>
            <h1>Bangazon!</h1>
            <OrderComponent orders={this.state.orders} getAll={this.getAll}/>
            <OrderFormComponent create={this.create} />
            </>
        )
    }
}
