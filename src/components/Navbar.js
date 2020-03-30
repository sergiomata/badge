import React from "react";
import confLogo from "../images/badge-header.svg";
import "./styles/Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <a className="Navbar__brand" href="/">
            <img className="Navbar__brand-logo" src={confLogo} alt="Logo"></img>
            <span className="font-weight-light"> Platzi</span>
            <span claName="font-weight-bold"> Conf</span>
          </a>
        </div>
      </div>
    );
  }
}

export default Navbar;
