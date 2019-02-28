import React, { Component } from 'react'
import ProductItem from './productItem'
import NewProductForm from './newProductForm'
// import EditProductForm from './editProductForm'
import './index.css'

export default class Products extends Component {

state = {
  newProductButton: false,
  editProductButton: false,
  newProductForm: false,
  editProductForm: false,
  selectedProduct: {}
}

componentDidMount() {
this.props.getAll("products")

}

formSummoner = () => {
  this.setState({
    newProductButton: true,
    newProductForm: true,
    editProductButton: false,
    selectedProduct: {}
  })
}

editFormSummoner = (Product) => {
  this.setState({
    editProductButton: true,
    newProductButton: false,
    editProductForm: true,
    newProductForm: false,
    selectedProduct: Product
  })
}

formDestroyer = () => {
  this.setState({
    newProductButton: false,
    newProductForm: false,
    editProductButton: false,
    selectedProduct: {}
  })
}


consoleLog = () => {
  console.log(this.state.selectedProduct)
}

updateState = () => {
  this.setState({
    editProductButton: true,
    editProductForm: true
  })
}


render(){


  let newProductButton = ""
let newProductForm = ""
// let editForm = ""


if(this.state.newProductButton === false && this.state.newProductForm === false) {
  newProductButton = (<button className="newProductButton" onClick={this.formSummoner}>Create New Training Product</button>)
} else {
  newProductButton = null
}


if(this.state.newProductButton && this.state.newProductForm) {

  newProductForm = (<NewProductForm className="newProductForm"
    createNew={this.props.createNew}
    formDestroyer={this.formDestroyer}
    />)
} else {
  newProductForm = null
}

// if(this.state.editProductButton && this.state.editProductForm) {

//   editForm = (<EditProductForm
//     edit={this.props.edit}
//     formDestroyer={this.formDestroyer}
//     editFormSummoner={this.editFormSummoner}
//     selectedProduct={this.state.selectedProduct}
//     updateState={this.updateState}
//   />)

// } else {
//   editForm = null
// }

let productItem = this.props.products.map(product => {
return (
  <ProductItem
  products={this.props.products}
  create={this.props.create}
  product={product}
  />

)
})


return(
<React.Fragment>
  <h1 className="productsTitle" >Products</h1>
  {/* <button onClick={this.consoleLog}>Console Log</button> */}

  {/* <ProductItem
  products={this.props.products}
  create={this.props.create}
  // editFormSummoner={this.editFormSummoner}
  /> */}

  {newProductForm}
  {newProductButton}
  {productItem}

  {/* {editForm} */}


</React.Fragment>

)



}



}