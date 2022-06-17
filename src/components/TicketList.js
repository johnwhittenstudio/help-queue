import React from "react";
import Ticket from "./Ticket";
import PropTypes from "prop-types";

// in props.ticketList.map we loop through the list passed down from TicketControl
function TicketList(props){
  return (
    <React.Fragment>
      <h1 className="headingFont" style={{color: "black"}}>Submit Your Ticket</h1>
      <hr />
      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3">
      {Object.values(props.ticketList).map((ticket) =>
        <div class="col mb-4">
        <div id="card" className="card shadow-lg h-100 text-left" >
          <br/>
        <Ticket
          whenTicketClicked = { props.onTicketSelection }
          names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          formattedWaitTime={ticket.formattedWaitTime}
          id={ticket.id}
          key={ticket.id}/>
          </div>
        </div>
        )}
      </div>
    </React.Fragment>
  );
}

// Add propTypes for ticketList.
TicketList.propTypes = {
  ticketList: PropTypes.object,
  onTicketSelection: PropTypes.func
};

export default TicketList;