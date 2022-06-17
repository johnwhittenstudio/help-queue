import React from "react";
import PropTypes from "prop-types";


function Ticket(props){
  return (
    <React.Fragment>
      {/* //Because TicketList is iterating through each individual ticket, each ticket will have its own div with an onClick handler attached. */}
      {/* Use arrow function so that expression isn't evaluated immidately */}
      <div onClick = {() => props.whenTicketClicked(props.id)}>
        { /* We add a div with an onClick function. Don't forget to close out the div below! */}
        <h5>Names: <strong>{props.names}</strong></h5>
        <h5>Location: <strong>{props.location}</strong></h5>
        <p>Issue: <strong><em>{props.issue}</em></strong></p>
        <hr id="cardhr" />
        <p><strong><em>{props.formattedWaitTime}</em></strong> since ticket created</p>
      </div>
    </React.Fragment>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string,
  issue: PropTypes.string,
  id: PropTypes.string,
  whenTicketClicked: PropTypes.func,
  formattedWaitTime: PropTypes.string
};

export default Ticket;