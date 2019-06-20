import React from 'react';

import './App.scss';

import myDogs from './dogs';
import DogPen from '../components/Dog/DogPen/DogPen';

class App extends React.Component {
  state = {
    dogs: [],
  }

  componentDidMount() {
    this.setState({ dogs: myDogs });
  }

  render() {
    const { dogs } = this.state;
    return (
      <div className="App">
        <div>Dogs</div>
        <DogPen dogs={dogs}/>
        <div>Employees</div>
      </div>
    );
  }
}

export default App;
