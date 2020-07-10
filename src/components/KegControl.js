import React from "react";
import NewKegForm from "./NewKegForm";
import KegList from "./KegList";
import KegDetail from "./KegDetail";
import EditKegForm from './EditKegForm';


class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterKegList: [],
      counter: 0,
      selectedKeg: null,
      editing: false
    };
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    this.setState({ selectedKeg: selectedKeg });
  }

  handleAddingNewKegToList = (newKeg) => {

    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({
      masterKegList: newMasterKegList,
      counter: 0
    });
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null,
        editing: false
      });
    } else if (this.state.counter === 0) {
      this.setState(prevState => ({
        counter: prevState.counter + 1
      }));
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
        counter: 0
      }));
    }
  }

  handleEditingKegInList = (kegToEdit) => {
    const editedMasterKegList = this.state.masterKegList
      .filter(keg => keg.id !== this.state.selectedKeg.id)
      .concat(kegToEdit);
    this.setState({
      masterKegList: editedMasterKegList,
      editing: false,
      selectedKeg: null
    });
  }

  handleEditClick = () => {
    this.setState({ editing: true });
  }

  handlePullingPint = (id) => {
    const thisKeg = this.state.masterKegList
      .filter(keg => keg.id === id)
    if (thisKeg[0].capacity === 0) {

    } else if (thisKeg[0].capacity > 0 && thisKeg[0].capacity > 11) {
      thisKeg[0].capacity -= 1;
      this.setState({ counter: 0 });
    } else if (thisKeg[0].capacity > 1 && thisKeg[0].capacity <= 11) {
      thisKeg[0].capacity -= 1;
      thisKeg[0].howMuchLeft = "Not Much"
      this.setState({ counter: 0 });
    } else {
      thisKeg[0].capacity -= 1;
      thisKeg[0].howMuchLeft = "None"

      this.setState({ counter: 0 });
    }
  }

  handleDeletingKeg = (id) => {
    const newMasterKegList = this.state.masterKegList.filter(keg => keg.id !== id);
    this.setState({
      masterKegList: newMasterKegList,
      selectedKeg: null
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
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
      buttonText = "Return to Keg List";
    } else if (this.state.counter === 0) {
      currentlyVisibleState =
        <KegList
          kegList={this.state.masterKegList}
          onKegSelection={this.handleChangingSelectedKeg}
          onClickingEditCapacity={this.handlePullingPint}
        />
      buttonText = "Add Keg!";
    } else if (this.state.counter === 1) {
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

export default KegControl;
