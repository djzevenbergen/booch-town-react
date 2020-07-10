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
      selectedKeg: null
      // editing: false
    };
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = Object.values(this.props.masterKegList).filter(keg => keg.id === id)[0];


    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    this.setState({ selectedKeg: selectedKeg });
  }

  handleAddingNewKegToList = (newKeg) => {

    const { dispatch } = this.props;
    const action = c.addKeg(newKeg);
    dispatch(action);
    const action2 = c.toggleForm();
    dispatch(action2);

  }

  // handleClick = () => {
  //   if (this.state.selectedKeg != null) {
  //     this.setState({
  //       formVisibleOnPage: false,
  //       selectedKeg: null,
  //       editing: false
  //     });
  //   } else if (this.props.formVisible === false) {
  //     this.setState(prevState => ({
  //       counter: prevState.counter + 1
  //     }));
  //   } else {
  //     this.setState(prevState => ({
  //       formVisibleOnPage: !prevState.formVisibleOnPage,
  //       counter: 0
  //     }));
  //   }
  // }


  handleClick = () => {

    if (this.state.selectedKeg !== null) {

      const { dispatch } = this.props;
      const action = c.toggleEditForm();
      dispatch(action);
      console.log("handle click" + action);
      this.setState({
        selectedKeg: null
      });


    } else {

      const { dispatch } = this.props;
      const action = c.toggleForm();
      dispatch(action);
      console.log("else:" + action.type);
    }
  }

  handleEditingKegInList = (kegToEdit) => {
    const { dispatch } = this.props;

    const action = c.addKeg(kegToEdit);
    dispatch(action);

    const action2 = c.toggleEditForm();
    dispatch(action2);

    this.setState({
      selectedKeg: null
    });
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

    //!!!!!!!!!!!!!!!!!!!!!!
    this.setState({
      selectedKeg: null
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.props.editing) {
      currentlyVisibleState = <EditKegForm keg={this.state.selectedKeg} onEditKeg={this.handleEditingKegInList} />
      buttonText = "Return to Keg List";
    }
    else if (this.state.selectedKeg != null) {
      currentlyVisibleState =
        <KegDetail
          keg={this.state.selectedKeg}
          onClickingDelete={this.handleDeletingKeg}
          onClickingEdit={this.handleEditClick}
        />
      console.log(this.props.formVisible);
      console.log(this.state.selectedKeg);
      console.log(this.props.editing);
      buttonText = "Return to Keg List";
    } else if (this.props.formVisible === false) {
      console.log(this.props.masterKegList);
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
  editing: PropTypes.bool
}

const mapStateToProps = state => {
  return {
    masterKegList: state.masterKegList,
    formVisible: state.formVisible,
    editing: state.editing
  }
}

KegControl = connect(mapStateToProps)(KegControl);


export default KegControl;
