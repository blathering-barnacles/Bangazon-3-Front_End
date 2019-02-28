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
    seller: "",
  }

  componentDidMount = () => {
    this.makeDate()
    this.props.getAll("customers")
    this.props.getAll("productTypes")
  }

  handleFieldChange = (event) => {
    const stateToChange = {}
    stateToChange[event.target.id] = event.target.value
    this.setState(stateToChange)
    console.log(stateToChange)
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
    console.log("CUSTOMERS: ", this.state.customer)
    console.log("PROPS CUST: ", this.props.customers)
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
  }

render() {

  return (
    <React.Fragment>
      <h2>New Product <button onClick={this.closeForm}>Close Form</button></h2>
      <input type="text" id="title" placeholder="New Product Name" onChange={this.handleFieldChange}></input>
      <input type="text" id="location" placeholder="location" onChange={this.handleFieldChange}></input>
      <input type="text" id="price" placeholder="price" onChange={this.handleFieldChange}></input>
      <input type="text" id="quantity" placeholder="quantity" onChange={this.handleFieldChange}></input>
      <select type="text" id="productType" placeholder="product category" onChange={this.handleFieldChange}>
      { this.props.productTypes.map( category =>
      <option value={category.url}>{category.name}</option>
      )
      }
      </select>
      <select type="text" id="seller" placeholder="who is selling?" onChange={this.handleFieldChange}>
      { this.props.customers.map( customer =>
      <option value={customer.url}>{customer.firstName}</option>
      )
      }
      </select>
      <textarea id="description" placeholder="description" onChange={this.handleFieldChange}></textarea>
      <button onClick={() => {this.createNewProduct("products", this.state)}}>Create New Product</button>
      <button onClick={this.consoleLog}>console log</button>

    </React.Fragment>
  )

}


}