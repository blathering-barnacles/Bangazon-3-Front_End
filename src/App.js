import React, { Component } from 'react';
import ApplicationViews from './components/ApplicationViews'
import APIManager from './modules/APIManager';


export default class App extends Component {


  render() {

    return (
      <React.Fragment>
         <ApplicationViews />
      </React.Fragment>
    )
  }

  }
