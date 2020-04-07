import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import BadgesList from "../components/BadgesList";
import "./styles/Badges.css";
import Conf_Logo from "../images/badge-header.svg";
import BadgeList from "../components/BadgesList";

class Badges extends React.Component {
  state = {
    data: [
      {
        id: "1",
        fistName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        jobTitle: "Developer",
        twitter: "johnDoe",
        avatarUrl: "https://www.gravatar.com/avatar?d=identicon"
      },
      {
        id: "2",
        fistName: "Joaquin",
        lastName: "Phoenix",
        email: "joaquin.phoenix@example.com",
        jobTitle: "Developer",
        twitter: "joaquinPhoenix",
        avatarUrl: "https://www.gravatar.com/avatar?d=identicon"
      }
    ]
  };
  render() {
    return (
      <div>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges_conf-logo"
                src={Conf_Logo}
                alt="Conf_Logo"
              ></img>
            </div>
          </div>
        </div>
        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              {" "}
              New Badge
            </Link>
          </div>
          <div className="Badges__list">
            <div className="Badges__container">
              <BadgeList badges={this.state.data} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Badges;
