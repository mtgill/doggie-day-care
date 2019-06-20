import React from 'react';

import './App.scss';

import myDogs from './dogs';
import myEmployees from './employees';

import DogPen from '../components/Dog/DogPen/DogPen';
import StaffRoom from '../components/StaffRoom/StaffRoom';

class App extends React.Component {
  state = {
    dogs: [],
    employees: [],
  }

  componentDidMount() {
    this.setState({ dogs: myDogs });
    this.setState({ employees: myEmployees });
  }

  render() {
    const { dogs } = this.state;
    const { employees } = this.state;
    return (
      <div className="App">
        <div>Dogs</div>
        <DogPen dogs={dogs}/>
        <div>Employees</div>
        <StaffRoom employees={employees}/>
      </div>
    );
  }
}

export default App;
