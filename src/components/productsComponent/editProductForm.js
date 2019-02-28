import React, { Component } from 'react'

// TODO NEED ADD ID IN API TO PRODUCT SO IT CAN EDIT

export default class EditProductForm extends Component {


  state = {
    title: this.props.selectedProduct.title,
    location: this.props.selectedProduct.location,
    description: this.props.selectedProduct.description,
    price: this.props.selectedProduct.price,
    quantity: this.props.selectedProduct.quantity,
    deletedOn: ""
  }

  componentDidUpdate(prevProps) {
    if(this.props.selectedProduct.title !== prevProps.selectedProduct.title){
      console.log("PREV PROPS: ",prevProps)
      this.setState({
        title: this.props.selectedProduct.title,
        location: this.props.selectedProduct.location,
        description: this.props.selectedProduct.description,
        price: this.props.selectedProduct.price,
        quantity: this.props.selectedProduct.quantity,
      })
    }
  }




  handleFieldChange = (event) => {
    const stateToChange = {}
    stateToChange[event.target.id] = event.target.value
    this.setState(stateToChange)
    console.log(stateToChange)
  }

  editProduct = (resource, newObj, id) => {
    this.props.editThis(resource, newObj, id)
  }

  closeForm = () => {
    this.props.formDestroyer()
  }

  consoleLog = () => {
    // console.log(this.state.title)
    // console.log(this.state.location)
    // console.log(this.state.description)
    // console.log(this.state.price)
    console.log("SELECTED Product title", this.props.selectedProduct.title)
    console.log('SELECTED Product ID', this.props.selectedProduct.id)
  }


render() {

  return (
    <React.Fragment>
      <h2>Edit This Product <button onClick={this.closeForm}>Close Form</button></h2>
      <input type="text" id="title" onChange={this.handleFieldChange} value={this.state.title}></input>
      <input type="text" id="location" onChange={this.handleFieldChange} value={this.state.location}></input>
      <input type="text" id="price"  onChange={this.handleFieldChange} value={this.state.price}></input>
      <input type="text" id="quantity"  onChange={this.handleFieldChange} value={this.state.price}></input>
      <textarea type="textarea" id="description" className="descriptionBox" onChange={this.handleFieldChange} value={this.state.description}></textarea>
      <button onClick={() => {this.editProduct("products", this.state, this.props.selectedProduct.id)}}>Submit Changes</button>
      {/* <button onClick={this.consoleLog}>console log</button> */}

    </React.Fragment>
  )

}


}