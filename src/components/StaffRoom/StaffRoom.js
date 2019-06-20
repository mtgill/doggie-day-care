import React from 'react';

import './StaffRoom.scss';

import Employee from '../Employee/Employee';

class StaffRoom extends React.Component {
  render() {
    const { employees } = this.props;
    const makeEmployees = employees.map(employee => (
      <Employee key={employee.id} employee={employee} />
    ));
    return (
      <div className="StaffRoom d-flex flex-wrap">
      { makeEmployees }
      </div>
    );
  }
}

export default StaffRoom;
