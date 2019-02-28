import React, { Component } from 'react'
import TrainingProgramItem from './trainingProgramItem'
import NewProgramForm from './newProgramForm'
import EditProgramForm from './editProgramForm'
import './index.css'

export default class TrainingPrograms extends Component {

state = {
  newProgramButton: false,
  editProgramButton: false,
  newProgramForm: false,
  editProgramForm: false,
  selectedProgram: {}
}

componentDidMount() {
this.props.getAll("trainingPrograms")

}


formSummoner = () => {
  this.setState({
    newProgramButton: true,
    newProgramForm: true,
    editProgramButton: false,
    selectedProgram: {}
  })
}

editFormSummoner = (program) => {
  this.setState({
    editProgramButton: true,
    newProgramButton: false,
    editProgramForm: true,
    newProgramForm: false,
    selectedProgram: program
  })
}

formDestroyer = () => {
  this.setState({
    newProgramButton: false,
    newProgramForm: false,
    editProgramButton: false,
    selectedProgram: {}
  })
}


consoleLog = () => {
  console.log(this.state.selectedProgram)
}

updateState = () => {
  this.setState({
    editProgramButton: true,
    editProgramForm: true
  })
}


render(){


let newProgramForm = ""
let newProgramButton = ""
let editForm = ""


if(this.state.newProgramButton === false && this.state.newProgramForm === false) {
  newProgramButton = (<button className="newProgramButton" onClick={this.formSummoner}>Create New Training Program</button>)
} else {
  newProgramButton = null
}


if(this.state.newProgramButton && this.state.newProgramForm) {

  newProgramForm = (
  <div className="newProgramForm" >
  <NewProgramForm
    createNewProgram={this.props.createNewProgram}
    formDestroyer={this.formDestroyer}
    />
    </div>)
} else {
  newProgramForm = null
}

if(this.state.editProgramButton && this.state.editProgramForm) {

  editForm = (
  <div className="newProgramForm">
  <EditProgramForm
    editThisProgram={this.props.editThisProgram}
    formDestroyer={this.formDestroyer}
    editFormSummoner={this.editFormSummoner}
    selectedProgram={this.state.selectedProgram}
    updateState={this.updateState}
  />
  </div>)

} else {
  editForm = null
}


return(
<React.Fragment>
  <h1 className="trainingProgramsTitle" >Training Programs</h1>
  {/* <button onClick={this.consoleLog}>Console Log</button> */}

  {newProgramForm}
  {editForm}
  {newProgramButton}
  <TrainingProgramItem
  trainingPrograms={this.props.trainingPrograms}
  createNewProgram={this.props.createNewProgram}
  editFormSummoner={this.editFormSummoner}
  deleteThisProgram={this.props.deleteThisProgram}
  />



</React.Fragment>

)



}



}