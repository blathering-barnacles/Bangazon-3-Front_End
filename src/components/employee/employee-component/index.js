import React, { Component } from 'react';

class Employee extends Component {

  componentDidMount() {
    this.props.getAll('employees')
  }

  render() {
    return (
      <div>
        <h1>Employees</h1>
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