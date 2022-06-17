import React from "react";
import PropTypes from "prop-types";

function TicketDetail(props){
  const { ticket, onClickingDelete } = props;

  return (
    <React.Fragment>
      <div className="card shadow-lg w-75 mx-auto" style={{fontSize: 24, color: "black"}}>
        <div className="headingFont card-header text-center text-black" style={{fontSize: 24, backgroundColor: "#ffdcd2", color: "black"}}><em>Ticket Details</em></div>
          <div className="card-body">
            <div class="row">
              <h3><strong>{ticket.location}</strong></h3>
              <h5><em>{ticket.names}</em></h5>
            <hr />
            </div>
            <p><em>{ticket.issue}</em></p>
          </div>
          <div className="card-footer justify-content-center" style={{backgroundColor: "white"}}>
          <button onClick={ props.onClickingEdit }className="btn shadow mr-2 updateBtn btn-outline-secondary">Update Ticket</button>
          <button onClick={()=> onClickingDelete(ticket.id) }className="btn shadow mr-2 updateBtn btn-outline-secondary">Close Ticket</button>
      {/* <hr/> */}
      </div>
    </div>
    </React.Fragment>
  );
}

TicketDetail.propTypes = {
  ticket: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default TicketDetail;