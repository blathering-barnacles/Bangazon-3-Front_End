import React, { Component } from 'react'
import './index.css'



export default class TrainingProgramItem extends Component {


  render(){


    let programNode = this.props.trainingPrograms.map( program => {
      return(
        <div key={program.id} className="program">
          <div className="entryTitle">
          <p className="programEntry">{program.name} <button onClick={() => {this.props.editFormSummoner(program)}}>Edit</button> <button onClick={() => {this.props.deleteThisProgram('trainingPrograms', program.id)}}>X</button></p>
          </div>
          <div className="entryBody">
          <p>Start Date: </p>
          <p className="programEntry">{program.startDate}</p>
          <p>End Date: </p>
          <p className="programEntry">{program.endDate}</p>
          <p>Max Attendees: </p>
          <p className="programEntry">{program.maxAttendees}</p>
           </div>
        </div>

      )



    })


    return(
      <React.Fragment>

      {programNode}

      </React.Fragment>


    )

  }

}