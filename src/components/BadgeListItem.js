import React from "react";
import twitterLogo from "../images/twitter.png";
import Gravatar from "./Gravatar";

class BadgeListItem extends React.Component {

  render() {

    const { badge } = this.props;

    return <div>
      <div className="row">
        <div className="colum">
          <Gravatar className="Badge__image" email={badge.email} />
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
    </div>
  }

};

export default BadgeListItem;