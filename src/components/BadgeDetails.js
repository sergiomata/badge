import React from "react";
import { Link } from "react-router-dom";
import Badge from "./Badge";
import DeleteBadgeModal from "./DeleteBadgeModal";
import "./styles/BadgeDetails.css";
import confLogo from "../images/platziconf-logo.svg";

class BadgeDetails extends React.Component {

  render() {
    const badge = this.props.badge;
    return (
      <React.Fragment>
        <div className="BadgeDetails__hero">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <img src={confLogo} alt="conference logo"></img>
              </div>
              <div className="col-6 BadgeDetails__hero-attendant-name" >
                <h1> {badge.firstName} {badge.lastName}</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName={badge.firstName}
                lastName={badge.lastName}
                email={badge.email}
                twitter={badge.twitter}
                jobTitle={badge.jobTitle}
              />
            </div>
            <div className="col" >
              <h2> Actions</h2>
              <div className="">
                <div className="btn btn-primary mb-4">
                  <Link to={`/badges/${badge.id}/Edit`}>
                    Edit
                    </Link>
                </div>
                <div>
                  <button onClick={this.props.onOpenModal} className="btn btn-danger">Delete</button>
                  {this.props.modalIsOpen ? console.log("modalIsOpen:true") : null}
                  <DeleteBadgeModal
                    isOpen={this.props.modalIsOpen}
                    onClose={this.props.onCloseModal}
                    onDeleteBadge={this.props.onDeleteBadge}
                  >
                  </DeleteBadgeModal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment >
    );
  }


};

export default BadgeDetails;