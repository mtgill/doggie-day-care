import React from 'react';

import './Home.scss';

import DogPen from '../Dog/DogPen/DogPen';
import StaffRoom from '../StaffRoom/StaffRoom';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
      <div><h2>Dogs</h2></div>
      <DogPen />
      <div><h2>Employees</h2></div>
      <StaffRoom />
    </div>
    );
  }
}

export default Home;
