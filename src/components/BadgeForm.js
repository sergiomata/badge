import React from "react";
import confLogo from "../images/badge-header.svg";
import "./styles/Navbar.css";

class BadgeForm extends React.Component {
  handleChange = event => {
    console.log({ name: event.target.name, value: event.target.value });
  };

  handleClick = event => {
    console.log("button was clicked");
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("form was submited");
  };

  render() {
    return (
      <div>
        <h1> New Attendant</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label> First Name</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="firstName"
            ></input>
            <button onClick={this.handleClick} className="btn btn-primary">
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
