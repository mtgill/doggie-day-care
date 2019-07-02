/* eslint-disable max-len */
import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './Home.scss';

import DogPen from '../Dog/DogPen/DogPen';
import dogData from '../../helpers/data/dogData';
import StaffRoom from '../StaffRoom/StaffRoom';
import employeeData from '../../helpers/data/employeeData';
import walkData from '../../helpers/data/walkData';
import Walk from '../Walk/Walk';

class Home extends React.Component {
  state = {
    dogs: [],
    employees: [],
    walks: [],
    dogsDropdownOpen: false,
    dogValue: 'Dogs To Walk',
  }

  toggle = this.toggle.bind(this);

  toggle(e) {
    e.preventDefault();
    this.setState(prevState => ({
      dogsDropdownOpen: !prevState.dogsDropdownOpen,
    }));
  }

  getWalks = () => {
    walkData.getWalks()
      .then(walks => this.setState({ walks }))
      .catch(err => console.error('no walks available', err));
  }

  componentDidMount() {
    dogData.getDogs()
      .then(dogs => this.setState({ dogs }))
      .catch(err => console.error('no dogs available', err));
    employeeData.getemployees()
      .then(employees => this.setState({ employees }))
      .catch(err => console.error('no eomployees available', err));

    this.getWalks();
  }

  deleteWalks = (walkId) => {
    walkData.deleteWalks(walkId)
      .then(() => this.getWalks())
      .catch(err => console.error('error with delete request', err));
  }

  getDogName = (e) => {
    e.preventDefault();
    const dogToWalk = e.target.name;
    this.setState({
      dogValue: e.target.name,
    });
    console.error('dog to walk', dogToWalk);
  }

  render() {
    const { dogs, employees } = this.state;
    const walkComponents = this.state.walks.map(walk => (
      <Walk key={walk.id} walk={walk} deleteWalks={this.deleteWalks}/>
    ));
    const dogOptions = this.state.dogs.map(dog => (
      <DropdownItem key={dog.id} name={dog.name} onClick={this.getDogName}>{dog.name}</DropdownItem>
    ));
    const employeeOptions = this.state.employees.map(employee => (
      <DropdownItem key={employee.id}>{employee.name}</DropdownItem>
    ));
    return (
      <div className="Home">
        <Dropdown isOpen={this.state.dogsDropdownOpen} onClick={this.toggle}>
        <DropdownToggle caret>{this.state.dogValue}</DropdownToggle>
        <DropdownMenu>
            {dogOptions}
        </DropdownMenu>
        </Dropdown>
      <div><h2>Dogs</h2></div>
      <DogPen dogs={ dogs }/>
      <div><h2>Employees</h2></div>
      <StaffRoom employees={ employees }/>
      <div className="row">{walkComponents}</div>
    </div>
    );
  }
}

export default Home;
