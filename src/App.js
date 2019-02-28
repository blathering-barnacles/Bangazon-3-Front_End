import React, { Component } from 'react';
import ApplicationViews from './components/ApplicationViews'


export default class App extends Component {


  render() {

    return (
      <React.Fragment>
        <h1>Welcome to Bangazon!</h1>
        <ApplicationViews />
      </React.Fragment>
    )
  }

  }
