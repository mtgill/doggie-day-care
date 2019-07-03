import React from 'react';

import './StaffRoom.scss';

import Employee from '../Employee/Employee';

class StaffRoom extends React.Component {
  render() {
    const makeStaff = this.props.employees.map(employee => (
      <Employee key={employee.id} employee={employee} />
    ));
    return (
      <div className="StaffRoom d-flex flex-wrap">
      {makeStaff}
      </div>
    );
  }
}

export default StaffRoom;
