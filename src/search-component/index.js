import React, { Component } from 'react'

class SearchComponent extends Component {
  state = {
    keyword: null
  }

  searchCustomers = () => {
    this.props.search("customers", this.state.keyword)
  }

  setKeyword = (event) => {
    this.setState({keyword: event.target.value})
  }

  render() {
    return (
      <>
        <input type='text' onChange={this.setKeyword} placeholder="search for customers"/>
        <button onClick={this.searchCustomers}>search</button>
      </>
    )
  }
}

export default SearchComponent