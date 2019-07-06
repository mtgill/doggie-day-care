/* eslint-disable max-len */
import React from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';

import './Home.scss';

import DogPen from '../Dog/DogPen/DogPen';
import dogData from '../../helpers/data/dogData';
import StaffRoom from '../StaffRoom/StaffRoom';
import employeeData from '../../helpers/data/employeeData';
import walkData from '../../helpers/data/walkData';
import Walk from '../Walk/Walk';
import WalkForm from '../WalkForm/WalkForm';

class Home extends React.Component {
  state = {
    dogs: [],
    employees: [],
    walks: [],
    walkModal: false,
    newWalk: {},
    walkEditing: {},
  }

  walkModalToggle = this.walkModalToggle.bind(this);

  walkModalToggle(e) {
    e.preventDefault();
    this.setState(prevState => ({
      walkModal: !prevState.walkModal,
    }));
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

  // saveNewWalk = (dogName, employeeName, date, walk) => {
  //   // if (Object.keys(this.state.walkEditing).length > 0) {
  //   this.editWalk(dogName, employeeName, date, walk);
  //   // } else {
  //   // this.buildNewWalk(dogName, employeeName, date);
  //   // }
  // }

  buildNewWalk = (dogName, employeeName, date) => {
    const newWalk = {
      walks: { ...this.state.newWalk },
      dogId: dogName,
      employeeId: employeeName,
      date,
    };
    walkData.addWalk(newWalk)
      .then(() => {
        this.setState({ newWalk: {} });
        this.setState({ walkModal: false });
        this.getWalks();
      });
    console.error('buildWalk ', newWalk);
  }

  editWalk = (dogName, employeeName, date, id) => {
    const updateWalk = { ...this.state.selectedWalk };
    const walkId = id;
    console.error('walk id', updateWalk.id);
    updateWalk.dogId = dogName;
    updateWalk.employeeId = employeeName;
    updateWalk.date = date;
    walkData.editWalk(walkId, updateWalk)
      .then(() => {
        this.setState({ updateWalk: {}, walkEditing: {} });
        this.setState({ walkModal: false });
        this.getWalks();
      });
    console.error('update walk ', updateWalk);
  }

  selectWalkToEdit = (walkId) => {
    this.setState({ walkModal: true });
    const selectedWalk = this.state.walks.find(x => x.id === walkId);
    this.setState({ walkEditing: selectedWalk });
    // this.saveNewWalk(selectedWalk.dogId, selectedWalk.employeeId, selectedWalk.date, selectedWalk);
    console.error('walkEditing', selectedWalk.id);
  }

  render() {
    const {
      dogs,
      employees,
      newWalk,
      walkEditing,
    } = this.state;
    const walkComponents = this.state.walks.map(walk => (
      <Walk key={walk.id} walk={walk} deleteWalks={this.deleteWalks} selectWalkToEdit={this.selectWalkToEdit} walkEditing={walkEditing}/>
    ));

    return (
      <div className="Home">
        <Button color="warning" onClick={this.walkModalToggle}>Add New Walk</Button>
        <Modal isOpen={this.state.walkModal} toggle={this.walkModalToggle} className={this.props.className}>
          <ModalHeader toggle={this.walkModalToggle}>Please add Dog and Employee to new walk</ModalHeader>
          <ModalBody>
              <WalkForm
               dogs={ dogs }
               employees={ employees }
               newWalk={ newWalk }
               saveNewWalk={this.saveNewWalk}
               walkEditing={ walkEditing }
               editWalk={this.editWalk}
               />
              </ModalBody>
        </Modal>
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
