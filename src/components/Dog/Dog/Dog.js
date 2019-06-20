import React from 'react';

import './Dog.scss';

class Dog extends React.Component {
  render() {
    const { dog } = this.props;
    return (
      <div className="Dog col-3">
        <div className="card">
          <img src={dog.imageUrl} className="card-img-top" alt="dog" />
          <div className="card-body">
            <h5 className="card-title">{dog.name}</h5>
            <p className="card-text">{dog.breed}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Dog;
