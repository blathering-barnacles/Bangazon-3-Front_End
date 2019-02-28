import React, { Component } from 'react';
import APIManager from './modules/APIManager';
import ApplicationViews from './components/ApplicationViews'


export default class App extends Component {


  render() {

    return (
      <React.Fragment>
        <h1>Bangazon!</h1>
        <ApplicationViews />
      </React.Fragment>
    )
  }
}
