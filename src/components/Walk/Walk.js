import React from 'react';

import './Walk.scss';

class Walk extends React.Component {
  render() {
    const { walk } = this.props;
    return (
    <div className="Walk col-3">
      <div className="card">
        <div className="card-body">
          <h3 className="card-text">{walk.date}</h3>
          <p className="card-text">{walk.dogId}</p>
          <p className="card-text">{walk.employeeId}</p>
        </div>
      </div>
    </div>
    );
  }
}

export default Walk;
