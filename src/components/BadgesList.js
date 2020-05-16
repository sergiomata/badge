import React from "react";
import { Link } from "react-router-dom";
import "./styles/BadgeList.css";
import BadgeListItem from "./BadgeListItem";

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
              <BadgeListItem badge={badge} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgeList;
