import React from "react";
import confLogo from "../images/badge-header.svg";
import "./styles/Badge.css";

class BadgeList extends React.Component {
  render() {
    return (
      <ul className="list-unstyled">
        {this.props.badges.map(badge => {
          return (
            <li key={badge.id}>
              <p>
                {badge.fistName} {badge.lastName}
              </p>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgeList;
