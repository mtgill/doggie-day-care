import React from 'react';

import PropTypes from 'prop-types';

import './StaffRoom.scss';

import Employee from '../Employee/Employee';
import employeeShape from '../../helpers/propz/employeeShape';

class StaffRoom extends React.Component {
  static propTypes = {
    employee: PropTypes.arrayOf(employeeShape.employeeShape),
  }

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
