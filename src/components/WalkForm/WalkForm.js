/* eslint-disable max-len */
import React from 'react';
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
} from 'reactstrap';

import moment from 'moment';

class WalkForm extends React.Component {
  state = {
    dogsDropdownOpen: false,
    employeeDropdownOpen: false,
    dogValue: 'Dogs To Walk',
    employeeValue: 'Employee for Walk',
  }

  dogToggle = this.dogToggle.bind(this);

  employeeToggle = this.employeeToggle.bind(this);


  dogToggle(e) {
    e.preventDefault();
    this.setState(prevState => ({
      dogsDropdownOpen: !prevState.dogsDropdownOpen,
    }));
  }

  employeeToggle(e) {
    e.preventDefault();
    this.setState(prevState => ({
      employeeDropdownOpen: !prevState.employeeDropdownOpen,
    }));
  }

  getDogName = (e) => {
    e.preventDefault();
    const dogToWalk = e.target.name;
    this.setState({
      dogValue: e.target.name,
    });
    console.error('dog to walk', dogToWalk);
  }

  getEmployeeName = (e) => {
    e.preventDefault();
    const employeeToWalk = e.target.name;
    this.setState({
      employeeValue: e.target.name,
    });
    console.error('dog to walk', employeeToWalk);
  }

  render() {
    const dogOptions = this.props.dogs.map(dog => (
      <DropdownItem key={dog.id} name={dog.name} onClick={this.getDogName}>{dog.name}</DropdownItem>
    ));
    const employeeOptions = this.props.employees.map(employee => (
      <DropdownItem key={employee.id} onClick={this.getEmployeeName} name={employee.name}>{employee.name}</DropdownItem>
    ));
    return (
      <div>
      <UncontrolledDropdown isOpen={this.state.dogsDropdownOpen} onClick={this.dogToggle}>
      <DropdownToggle caret>{this.state.dogValue}</DropdownToggle>
      <DropdownMenu>
          {dogOptions}
      </DropdownMenu>
      </UncontrolledDropdown>
      <UncontrolledDropdown isOpen={this.state.employeeDropdownOpen} onClick={this.employeeToggle}>
      <DropdownToggle caret>{this.state.employeeValue}</DropdownToggle>
      <DropdownMenu>
          {employeeOptions}
      </DropdownMenu>
      </UncontrolledDropdown>
      </div>
    );
  }
}

export default WalkForm;
