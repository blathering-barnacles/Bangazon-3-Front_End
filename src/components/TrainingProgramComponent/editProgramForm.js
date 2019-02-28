import React, { Component } from 'react'


export default class EditProgramForm extends Component {


  state = {
    name: this.props.selectedProgram.name,
    startDate: this.props.selectedProgram.startDate,
    endDate: this.props.selectedProgram.endDate,
    maxAttendees: this.props.selectedProgram.maxAttendees,
    deletedOn: ""
  }

  componentDidUpdate(prevProps) {
    if(this.props.selectedProgram.name !== prevProps.selectedProgram.name){
      console.log("PREV PROPS: ",prevProps)
      this.setState({
        name: this.props.selectedProgram.name,
        startDate: this.props.selectedProgram.startDate,
        endDate: this.props.selectedProgram.endDate,
        maxAttendees: this.props.selectedProgram.maxAttendees
      })
    }
    // console.log("PROPS", this.props.selectedProgram.name)
    // this.props.updateState()
  }




  handleFieldChange = (event) => {
    const stateToChange = {}
    stateToChange[event.target.id] = event.target.value
    this.setState(stateToChange)
    console.log(stateToChange)
  }

  editProgram = (resource, newObj, id) => {
    this.props.editThis(resource, newObj, id)
  }

  closeForm = () => {
    this.props.formDestroyer()
  }

  consoleLog = () => {
    // console.log(this.state.name)
    // console.log(this.state.startDate)
    // console.log(this.state.endDate)
    // console.log(this.state.maxAttendees)
    console.log("SELECTED PROGRAM NAME", this.props.selectedProgram.name)
    console.log('SELECTED PROGRAM ID', this.props.selectedProgram.id)
  }


render() {

  return (
    <React.Fragment>
      <h2>Edit {this.state.name} Program<button onClick={this.closeForm}>Close Form</button></h2>
      <input type="text" id="name" onChange={this.handleFieldChange} value={this.state.name}></input>
      <input type="date" id="startDate" onChange={this.handleFieldChange} value={this.state.startDate}></input>
      <input type="date" id="endDate"  onChange={this.handleFieldChange} value={this.state.endDate}></input>
      <input type="text" id="maxAttendees"  onChange={this.handleFieldChange} value={this.state.maxAttendees}></input>
      <button onClick={() => {this.editProgram("trainingPrograms", this.state, this.props.selectedProgram.id)}}>Submit Changes</button>
      {/* <button onClick={this.consoleLog}>console log</button> */}

    </React.Fragment>
  )

}


}