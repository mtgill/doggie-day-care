import React from 'react';

import './DogPen.scss';

import dogData from '../../../helpers/data/dogData';
import Dog from '../Dog/Dog';

class DogPen extends React.Component {
  state = {
    dogs: [],
  }

  componentDidMount() {
    dogData.getDogs()
      .then(dogs => this.setState({ dogs }))
      .catch(err => console.error('no dogs available', err));
  }

  render() {
    const dogComponents = this.state.dogs.map(dog => (
      <Dog key={dog.id} dog={dog} />
    ));
    return (
      <div className="DogPen d-flex flex-wrap">
        {dogComponents}
      </div>
    );
  }
}

export default DogPen;
