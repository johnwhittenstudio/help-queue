import React from "react";
import ticketsImage from "./../img/ticket.png";

function Header(props){
  const headerImageStyle = {
    width: "150px"
  }
  return (
    <React.Fragment>
      <center>
      <h1 id="header"><img src={ticketsImage} style={headerImageStyle} alt="single ticket" />&nbsp;<strong>Help Queue</strong>&nbsp;<img src={ticketsImage} style={headerImageStyle} alt="single ticket" /></h1>
      </center>
      <br/>
    </React.Fragment>
  );
}

export default Header;