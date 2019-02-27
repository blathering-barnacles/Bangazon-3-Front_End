import React, { Component } from 'react'


export default class NewProgramForm extends Component {


  state = {
    name: "",
    startDate: "",
    endDate: "",
    maxAttendees: "",
    deletedOn: ""
  }

  handleFieldChange = (event) => {
    const stateToChange = {}
    stateToChange[event.target.id] = event.target.value
    this.setState(stateToChange)
    console.log(stateToChange)
  }

  createNewProgram = (resource, newObj) => {
    this.props.create(resource, newObj)
    }

  closeForm = () => {
    this.props.formDestroyer()
  }

  consoleLog = () => {
    console.log(this.state.name)
    console.log(this.state.startDate)
    console.log(this.state.endDate)
    console.log(this.state.maxAttendees)
  }


render() {

  return (
    <React.Fragment>
      <h2>New Program <button onClick={this.closeForm}>Close Form</button></h2>
      <input type="text" id="name" placeholder="New Program Name" onChange={this.handleFieldChange}></input>
      <input type="date" id="startDate" placeholder="Start Date" onChange={this.handleFieldChange}></input>
      <input type="date" id="endDate" placeholder="End Date" onChange={this.handleFieldChange}></input>
      <input type="text" id="maxAttendees" placeholder="Max limit of Attendees" onChange={this.handleFieldChange}></input>
      <button onClick={() => {this.createNewProgram("trainingPrograms", this.state)}}>Create New Program</button>
      <button onClick={this.consoleLog}>console log</button>

    </React.Fragment>
  )

}


}