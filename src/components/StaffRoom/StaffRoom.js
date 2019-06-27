import React from 'react';

import './StaffRoom.scss';

import Employee from '../Employee/Employee';
import employeeData from '../../helpers/data/employeeData';

class StaffRoom extends React.Component {
  state = {
    employees: [],
  }

  componentDidMount() {
    employeeData.getemployees()
      .then(employees => this.setState({ employees }))
      .catch(err => console.error('no eomployees available', err));
  }

  render() {
    const employeeComponents = this.state.employees.map(employee => (
      <Employee key={employee.id} employee={employee} />
    ));
    return (
      <div className="StaffRoom d-flex flex-wrap">
      {employeeComponents}
      </div>
    );
  }
}

export default StaffRoom;
