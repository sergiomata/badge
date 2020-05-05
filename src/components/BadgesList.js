import React from "react";
import { Link } from "react-router-dom";
import "./styles/BadgeList.css";
import twitterLogo from "../images/twitter.png";

class BadgeList extends React.Component {
  render() {
    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3>No badges were found</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create New Badge
          </Link>
        </div>
      );
    }

    return (
      <ul className="list-unstyled">
        {this.props.badges.map((badge) => {
          return (
            <li key={badge.id} className="Badge__container">
              <div className="row">
                <div className="colum">
                  <img src={badge.avatarUrl} className="Badge__image" />
                </div>
                <div className="colum">
                  <p className="Badge__name">
                    {badge.fistName} {badge.lastName}
                  </p>
                  <div className="row">
                    <img
                      className="Badge__image__twitter"
                      src={twitterLogo}
                      alt="twitterLogo"
                    />
                    <p className="Badge__text__twitter">@{badge.twitter}</p>
                  </div>
                  <p className="Badge__jobTitle">{badge.jobTitle}</p>
                </div>
              </div>
              {/* <div className="Badge__data">
                <p className="Badge__name">
                  {badge.fistName} {badge.lastName}
                </p>
                <img
                  className="Badge__image__twitter"
                  src={twitterLogo}
                  alt="twitterLogo"
                />
              </div> */}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgeList;
