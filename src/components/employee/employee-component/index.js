import React, { Component } from 'react';

class Employee extends Component {

  componentDidMount() {
    this.props.getAll('employees')
  }

  consoleLog = () => {
    console.log(this.props.employees)
  }


  render() {
    return (
      <div>
        <button onClick={this.consoleLog}>Console Log</button>
        <p>Employees!</p>
        <ul>
          {
            this.props.employees.map(employee => {
              return <li key={employee.id}>
                {employee.firstName} {employee.lastName}
                <ul>
                  <li>Start Date: {employee.startDate}</li>
                </ul>
              </li>
            })
          }
        </ul>
      </div>
    )
  }


}

export default Employee