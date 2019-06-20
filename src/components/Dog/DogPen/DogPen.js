import React from 'react';

import './DogPen.scss';

import Dog from '../Dog/Dog';

class DogPen extends React.Component {
  render() {
    const { dogs } = this.props;
    const makeDogs = dogs.map(dog => (
      <Dog key={dog.id} dog={dog} />
    ));
    return (
      <div className="DogPen d-flex flex-wrap">
        { makeDogs }
      </div>
    );
  }
}

export default DogPen;
