import React from "react";
import ticketsImage from "./../img/ticket.png";

function Header(props){
  const headerImageStyle = {
    width: "100px"
  }
  return (
    <React.Fragment>
      <center>
      <h1 id="header"><img src={ticketsImage} style={headerImageStyle} alt="single ticket" />&nbsp;<strong>Help Queue</strong>&nbsp;<img src={ticketsImage} style={headerImageStyle} alt="single ticket" /></h1>
      </center>
      {/* <hr id="cardhr" /> */}
      <br/>
    </React.Fragment>
  );
}

export default Header;