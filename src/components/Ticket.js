import React from "react";
import PropTypes from "prop-types";


function Ticket(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenTicketClicked(props.id)}>
        <hr id="cardhr" />
        <h5>Names: <strong>{props.names}</strong></h5>
        <h5>Location: <strong>{props.location}</strong></h5>
        <p>Issue: <strong><em>{props.issue}</em></strong></p>
        <hr id="cardhr" />
        {/* <p><strong><em>{props.formattedWaitTime}</em></strong> since ticket created</p> */}
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