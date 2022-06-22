import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
// import { v4 } from 'uuid';
// import Moment from 'moment';
import { useFirestore } from 'react-redux-firebase'

function NewTicketForm(props){

  const firestore = useFirestore();

  function addTicketToFirestore(event) {
    event.preventDefault();
    props.onNewTicketCreation();

    // Here's how we will actually add a ticket to Firestore.
    return firestore.collection("tickets").add(
      {
      names: event.target.names.value,
      location: event.target.location.value, 
      issue: event.target.issue.value,
      timeOpen: firestore.FieldValue.serverTimestamp()
      }
    );
  }

  return (
    <React.Fragment>
        <div className="card shadow-lg h-100 text-left card body Font p-4 w-50 mx-auto" style={{backgroundColor: "white"}}>
          <h1 id="banner" className="headingFont" style={{backgroundColor: "#add8e6", color: "black"}}>Add a New Ticket</h1>
          <hr />
          <ReusableForm 
            formSubmissionHandler={addTicketToFirestore}
            buttonText="Help!" />
        </div>
    </React.Fragment>
  );
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketForm;