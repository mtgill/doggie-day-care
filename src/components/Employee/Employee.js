import React from 'react';

import employeeShape from '../../helpers/propz/employeeShape';

import './Employee.scss';

class Employee extends React.Component {
  static employeeShape = {
    employee: employeeShape.employeeShape,
  }

  render() {
    const { employee } = this.props;
    return (
      <div className="Employee col-3">
      <div className="card">
        <img src={employee.imageUrl} className="card-img-top" alt="employee" />
        <div className="card-body">
          <h5 className="card-title">{employee.name}</h5>
          <p className="card-text">{employee.position}</p>
        </div>
      </div>
    </div>
    );
  }
}

export default Employee;
