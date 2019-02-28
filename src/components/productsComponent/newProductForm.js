import React, { Component } from 'react'


export default class NewProductForm extends Component {


  state = {
    title: "",
    location: "",
    description: "",
    price: "",
    quantity: "",
    dateAdded: "",
    deletedOn: "",
    productType: "",
    seller: ""
  }

  componentDidMount = () => {
    this.makeDate()
  }

  handleFieldChange = (event) => {
    const stateToChange = {}
    stateToChange[event.target.id] = event.target.value
    this.setState(stateToChange)
    console.log(stateToChange)
  }

  getCustomers = () => {

  }


  createNewProduct = (resource, newObj) => {
    this.props.createNew(resource, newObj)
  }

  closeForm = () => {
    this.props.formDestroyer()
  }

  consoleLog = () => {
    console.log(this.state.name)
    console.log(this.state.startDate)
    console.log(this.state.endDate)
    console.log(this.state.maxAttendees)
    console.log(this.state.dateAdded)
  }


  makeDate = () => {

  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth()+1; //January is 0!
  let yyyy = today.getFullYear();

  if(dd<10) {
      dd = '0'+dd
  }

  if(mm<10) {
      mm = '0'+mm
  }

  // today = mm + '-' + dd + '-' + yyyy;
  today = yyyy + '-' + mm + '-' + dd;

  this.setState({
    dateAdded: today
  })
  // console.log("DATE ADDED", this.state.dateAdded)

  }

render() {

  return (
    <React.Fragment>
      <h2>New Product <button onClick={this.closeForm}>Close Form</button></h2>
      <input type="text" id="title" placeholder="New Product Name" onChange={this.handleFieldChange}></input>
      <input type="text" id="location" placeholder="location" onChange={this.handleFieldChange}></input>
      <input type="text" id="price" placeholder="price" onChange={this.handleFieldChange}></input>
      <input type="text" id="quantity" placeholder="quantity" onChange={this.handleFieldChange}></input>
      <input type="text" id="productType" placeholder="product category" onChange={this.handleFieldChange}></input>
      <input type="text" id="seller" placeholder="who is selling?" onChange={this.handleFieldChange}></input>
      <textarea id="description" placeholder="description" onChange={this.handleFieldChange}></textarea>
      <button onClick={() => {this.createNewProduct("products", this.state)}}>Create New Product</button>
      <button onClick={this.consoleLog}>console log</button>

    </React.Fragment>
  )

}


}