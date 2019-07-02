import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
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

  render() {
    const { dogs, employees } = this.state;
    const walkComponents = this.state.walks.map(walk => (
      <Walk key={walk.id} walk={walk} deleteWalks={this.deleteWalks}/>
    ));
    const dogOptions = this.state.dogs.map(dog => (
      <option key={dog.id}>{dog.name}</option>
    ));
    const employeeOptions = this.state.employees.map(employee => (
      <option key={employee.id}>{employee.name}</option>
    ));
    return (
      <div className="Home">
        <Form>
        <FormGroup>
          <Label for="exampleSelect">Select a Dog</Label>
          <Input type="select" name="select" id="exampleSelect">
            {dogOptions}
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Select an Employee</Label>
          <Input type="select" name="select" id="exampleSelect">
            {employeeOptions}
          </Input>
        </FormGroup>
        </Form>
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
