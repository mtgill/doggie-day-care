import React from 'react';

import walkShape from '../../helpers/propz/walkShape';

import './Walk.scss';

class Walk extends React.Component {
  static propTypes = {
    walk: walkShape.walkShape,
  }

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
