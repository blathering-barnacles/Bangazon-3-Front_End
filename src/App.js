import React, { Component } from 'react';
import TrainingProgram from './components/TrainingProgramComponent/index'
// import './App.css';


export default class App extends Component {


  state = {
    trainingPrograms: [],
    apiUrl: "http://localhost:8000/api/v1/"
  }


  getTrainingPrograms = (resource, keyword=null) => {
    let url = `${this.state.apiUrl}${resource}/`
    if(keyword) {
      url+=keyword
    }
    fetch(url)
    .then( response => response.json() )
    .then( data => {
      console.log("TRAINING PROGRAMS: ", data)
      this.setState({
        [resource]: data
      })
    })
    .catch(err => console.log("Oopsy Daisy!", err))
  }


  create = (resource, newObj) => {
    let formData = new FormData()
    for ( let key in newObj ) {
      formData.append(key, newObj[key])
    }

    fetch(`${this.state.apiUrl}${resource}/`, {
      method: 'POST',
      body: formData
    })
    .then( newData => newData.json())
    .then( newData => {
      console.log("Added?", newData)
      this.getTrainingPrograms(resource)
    })
  }


  edit = (resource, newObj, id) => {

    let formData = new FormData()
    for ( let key in newObj ) {
      formData.append(key, newObj[key])
    }

    fetch(`${this.state.apiUrl}${resource}/${id}/`, {
      method: 'PATCH',
      body: formData
    })
    .then( newData => newData.json())
    .then(() => this.getTrainingPrograms(resource))
  }


render(){

return(
    <div>
    <h1>Bangazon!</h1>
    <TrainingProgram
    getTrainingPrograms={this.getTrainingPrograms}
    trainingPrograms={this.state.trainingPrograms}
    create={this.create}
    edit={this.edit}
    />
    </div>
)


}



}
