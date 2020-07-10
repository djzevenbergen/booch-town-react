import React from "react";
import NewKegForm from "./NewKegForm";
import KegList from "./KegList";
import KegDetail from "./KegDetail";
import EditKegForm from './EditKegForm';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { findAllByTestId } from "@testing-library/react";
import * as c from './../actions';


class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // masterKegList: [],
      // formVisible: false,
      // selectedKeg: null
      // editing: false
    };
  }

  handleChangingSelectedKeg = (id) => {
    const { dispatch } = this.props;
    const action = c.selectKeg(id);
    dispatch(action);
    console.log("am i happening");

    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  }

  handleAddingNewKegToList = (newKeg) => {

    const { dispatch } = this.props;
    const action = c.addKeg(newKeg);
    dispatch(action);
    const action2 = c.toggleForm();
    dispatch(action2);

  }

  handleClick = () => {

    if (this.props.selectedKeg !== null) {

      const { dispatch } = this.props;
      const action = c.toggleEditForm();
      if (this.props.editing === true) {
        dispatch(action);
      }

      const action2 = c.deselectKeg();
      console.log(this.props.selectedKeg);
      dispatch(action2);

    } else {
      console.log('wtf');
      const { dispatch } = this.props;
      const action2 = c.toggleEditForm();
      if (this.props.editing === true) {
        dispatch(action2);
      }
      // 
      const action = c.toggleForm();
      dispatch(action);
      // console.log("else:" + action.type);
    }
  }

  handleEditingKegInList = (kegToEdit) => {
    const { dispatch } = this.props;

    const action = c.addKeg(kegToEdit);
    dispatch(action);

    const action2 = c.toggleEditForm();
    dispatch(action2);

    const action3 = c.deselectKeg();
    dispatch(action3);
  }

  handleEditClick = () => {
    const { dispatch } = this.props;
    const action = c.toggleEditForm();
    dispatch(action);
  }

  handlePullingPint = (id) => {
    const thisKeg = Object.values(this.props.masterKegList)
      .filter(keg => keg.id === id);
    const { dispatch } = this.props;
    const action2 = c.pullKeg(id);

    if (thisKeg[0].capacity === 0) {

    } else if (thisKeg[0].capacity > 0 && thisKeg[0].capacity > 11) {
      dispatch(action2);
    } else if (thisKeg[0].capacity > 1 && thisKeg[0].capacity <= 11) {
      thisKeg[0].howMuchLeft = "Not Much"
      dispatch(action2);
    } else {
      thisKeg[0].howMuchLeft = "None"
      dispatch(action2);
    }
  }

  handleDeletingKeg = (id) => {
    const { dispatch } = this.props;
    const action = c.deleteKeg(id);
    dispatch(action);

    const action2 = c.deselectKeg();
    dispatch(action2);
    //!!!!!!!!!!!!!!!!!!!!!!
    // this.setState({
    //   selectedKeg: null
    // });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    let thisSelectedKeg;
    console.log("checking this id!" + this.props.selectedKeg);



    thisSelectedKeg = Object.values(this.props.masterKegList)
      .filter(keg => keg.id === this.props.selectedKeg);

    console.log("master list!!" + this.props.masterKegList);

    if (this.props.editing) {

      currentlyVisibleState = <EditKegForm keg={thisSelectedKeg[0]} onEditKeg={this.handleEditingKegInList} />
      buttonText = "Return to Keg List";
    }
    else if (this.props.selectedKeg != null) {
      currentlyVisibleState =
        <KegDetail
          keg={thisSelectedKeg[0]}
          onClickingDelete={this.handleDeletingKeg}
          onClickingEdit={this.handleEditClick}
        />
      console.log(this.props.formVisible);
      console.log(thisSelectedKeg);
      console.log(this.props.editing);
      buttonText = "Return to Keg List";
    } else if (this.props.formVisible === false) {
      console.log(this.props.masterKegList[this.props.selectedKeg]);
      currentlyVisibleState =
        <KegList
          kegList={this.props.masterKegList}
          onKegSelection={this.handleChangingSelectedKeg}
          onClickingEditCapacity={this.handlePullingPint}
        />
      buttonText = "Add Keg!";
    } else if (this.props.formVisible === true) {
      currentlyVisibleState =
        <NewKegForm
          onNewKegCreation={this.handleAddingNewKegToList}
        />
      buttonText = "Return to List";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

KegControl.propTypes = {
  masterKegList: PropTypes.object,
  formVisible: PropTypes.bool,
  editing: PropTypes.bool,
  selectedKeg: PropTypes.string
}

const mapStateToProps = state => {
  return {
    masterKegList: state.masterKegList,
    formVisible: state.formVisible,
    editing: state.editing,
    selectedKeg: state.selectedKeg
  }
}

KegControl = connect(mapStateToProps)(KegControl);


export default KegControl;
