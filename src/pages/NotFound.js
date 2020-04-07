import React, { Component } from "react";
import notFoundLogo from "../images/notFoundLogo.png";
import { Link } from "react-router-dom";

class NotFound extends Component {
  render() {
    return (
      <div className="Home">
        <div className="container">
          <div className="row">
            <div className="Home__col col-12 col-md-4">
              {/* <img
                src={platziconfLogoImage}
                alt="Platzi Conf Logo"
                className="img-fluid mb-2"
              /> */}

              <h1>Huston we have a problem!: URL Not Found</h1>
              <Link className="btn btn-primary" to="/badges">
                Go to Badges
              </Link>
            </div>

            <div className="Home__col d-none d-md-block col-md-8">
              <img
                src={notFoundLogo}
                alt="notFoundLogo"
                className="img-fluid p-4"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NotFound;
