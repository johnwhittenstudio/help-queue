import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';
import EditTicketForm from './EditTicketForm';
import TicketDetail from './TicketDetail';
import { v4 } from 'uuid';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions';

class TicketControl extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      // formVisibleOnPage: false,
      // Initializing list as an empty array and including it as a prop target
      // Selected ticket starts as null because no ticket has been selected yet
      selectedTicket: null,
      editing: false
    };
  }
  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateTicketElapsedWaitTime(),
    60000
    );
  }

    // We won't be using this method for our help queue update - but it's important to see how it works.
    componentDidUpdate() {
      console.log("component updated!");
    }
  
    componentWillUnmount(){
      console.log("component unmounted!");
      clearInterval(this.waitTimeUpdateTimer);
    }
  
    updateTicketElapsedWaitTime = () => {
      console.log("tick");
    }

// Important to use arrow notation so that this is automatically bound to its lexical scope, which is an instance of the class itself.
handleClick = () => {
  if (this.state.selectedTicket != null) {
    this.setState({
      selectedTicket: null,
      editing: false
    });
  } else {
    const { dispatch } = this.props;
    const action = a.toggleForm();
    dispatch(action);
  }
}

handleAddingNewTicketToList = (newTicket) => {
  const { dispatch } = this.props;
  const action = a.addTicket(newTicket);
  dispatch(action);
  const action2 = a.toggleForm();
  dispatch(action2);
}

  handleChangingSelectedTicket = (id) => {
    const selectedTicket = this.props.mainTicketList[id];
    this.setState({selectedTicket: selectedTicket});
  }

  handleDeletingTicket = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteTicket(id);
    dispatch(action);
    this.setState({selectedTicket: null});
  }

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({editing: true});
  }

  handleEditingTicketInList = (ticketToEdit) => {
    const { dispatch } = this.props;
    const action = a.addTicket(ticketToEdit);
    dispatch(action);
    this.setState({
      editing: false,
      selectedTicket: null
    });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null; 

    if (this.state.editing ) {      
      currentlyVisibleState = <EditTicketForm ticket = {this.state.selectedTicket} 
      onEditTicket = {this.handleEditingTicketInList} />
      buttonText = "Return to Ticket List";
    } else if (this.state.selectedTicket != null) {
      currentlyVisibleState = <TicketDetail ticket = {this.state.selectedTicket} 
        onClickingDelete = {this.handleDeletingTicket} 
        onClickingEdit = {this.handleEditClick} />
      buttonText = "Return to Ticket List";
      // While our TicketDetail component only takes placeholder data, we will eventually be passing the value of selectedTicket as a prop.
    } else if (this.props.formVisibleOnPage) {
      // passing mainTicketList down to TicketList here
      currentlyVisibleState = <NewTicketForm onNewTicketCreation={this.handleAddingNewTicketToList}  />;
      buttonText = "Return to Ticket List";
    } else {
      currentlyVisibleState = <TicketList ticketList={this.props.mainTicketList} onTicketSelection={this.handleChangingSelectedTicket} />;
      // Because a user will actually be clicking on the ticket in the Ticket component, we will need to pass our new handleChangingSelectedTicket method as a prop.
      buttonText = "Add Ticket";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick = {this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

TicketControl.propTypes = {
  mainTicketList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    mainTicketList: state.mainTicketList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

TicketControl = connect(mapStateToProps)(TicketControl);
export default TicketControl;