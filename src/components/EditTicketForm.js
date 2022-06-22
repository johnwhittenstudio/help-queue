import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase';

function EditTicketForm (props) {
  const { ticket } = props;
  const firestore = useFirestore();

  function handleEditTicketFormSubmission(event) {
    event.preventDefault();
    props.onEditTicket();
    const propertiesToUpdate = {
      names: event.target.names.value,
      location: event.target.location.value,
      issue: event.target.issue.value
    }
    return firestore.update({collection: 'tickets', doc: ticket.id }, propertiesToUpdate)
  }

  return (
    <React.Fragment>
      <div className="card shadow-lg h-100 text-left card bodyFont p-4 w-50 mx-auto" style={{backgroundColor: "white"}}>      <h1 id="banner" className="headingFont" style={{backgroundColor: "#add8e6", color: "black"}}>Edit This Ticket</h1>
        <hr />
      <ReusableForm 
        formSubmissionHandler={handleEditTicketFormSubmission}
        buttonText="Update Ticket" />
      </div>
    </React.Fragment>
  );
}

EditTicketForm.propTypes = {
  ticket: PropTypes.object,
  onEditTicket: PropTypes.func
};

export default EditTicketForm;