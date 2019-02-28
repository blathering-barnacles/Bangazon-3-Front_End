import React, { Component } from 'react'
import './index.css'



export default class ProductItem extends Component {

  state = {
    seller: [],
    category: []
  }

  componentDidMount() {
    this.getSellers()
    this.getCategories()
  }


  getSellers = () => {
    return fetch(`${this.props.product.seller}`)
    .then(response => response.json())
    .then(data => this.setState({ seller: data })
    )
  }

  getCategories = () => {
    return fetch(`${this.props.product.productType}`)
    .then(response => response.json())
    .then(data => this.setState({ category: data })
    )
  }


  consoleLog = () => {
    console.log("SELLERS STATE: ", this.state.seller)
    console.log("CATEGORY: ", this.state.category)
  }

  render() {


    return (
      <React.Fragment>
        {/* <button onClick={this.consoleLog}>CONSOLE LOG</button> */}
        <div key={this.props.product.id} className="product">
          <p>{this.state.category.name}</p>
          <div className="entryTitle">
            <p className="productEntry">{this.props.product.title} <button onClick={() => { this.props.editFormSummoner(this.props.product) }}>Edit</button></p>
          </div>
          <div className="entryBody">
            <p>Location: </p>
            <p className="productEntry">{this.props.product.location}</p>
            <p>Price: </p>
            <p className="productEntry">${this.props.product.price}</p>
            <p>Quantity: </p>
            <p className="productEntry">{this.props.product.quantity}</p>
            <p>Added: </p>
            <p className="productEntry">{this.props.product.dateAdded}</p>
            <p>Seller: </p>
            <p className="productEntry">{this.state.seller.firstName} {this.state.seller.lastName}</p>
          </div>
          <div className="endtyFooter">
          <p>Description: </p>
            <p className="productEntry">{this.props.product.description}</p>
          </div>
        </div>

      </React.Fragment>


    )

  }

}