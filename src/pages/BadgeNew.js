import React from "react";
import Navbar from "../components/Navbar";
import header from "../images/badge-header.svg";
import Badge from "../components/Badge";
import "./styles/BadgeNew.css";

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="headers"></img>
        </div>
        <div>
          <div className="container">
            <div className="row">
              <div className="col">
                <Badge
                  firstName="Serch"
                  lastName="Mata"
                  avatarUrl="https://www.gravatar.com/avatar?d=identicon"
                  jobTitle=" FullStack Developer"
                  twitter="thebeatmo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
