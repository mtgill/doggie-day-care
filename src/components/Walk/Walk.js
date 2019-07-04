import React from 'react';

import './Walk.scss';

class Walk extends React.Component {
  deleteWalkEvent = (e) => {
    const { walk, deleteWalks } = this.props;
    e.preventDefault();
    deleteWalks(walk.id);
  }

  selectWalk = (e) => {
    e.preventDefault();
    const { walk, selectWalkToEdit } = this.props;
    selectWalkToEdit(walk.id);
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
          <button className="btn btn-danger" onClick={this.deleteWalkEvent}>X</button>
          <button className="btn btn-info" onClick={this.selectWalk}>Edit</button>
        </div>
      </div>
    </div>
    );
  }
}

export default Walk;
