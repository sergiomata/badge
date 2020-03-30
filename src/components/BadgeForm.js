import React from "react";
import confLogo from "../images/badge-header.svg";
import "./styles/Navbar.css";

class BadgeForm extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     firstName: "",
  //     lastName: "",
  //     email: "",
  //     jobTitle: "",
  //     twitter: ""
  //   };
  // }

  // handleChange = event => {
  //   // console.log({ name: event.target.name, value: event.target.value });
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   });
  // };

  handleClick = event => {
    console.log("button was clicked");
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("form was submited");
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h1> New Attendant</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label> First Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="firstName"
              value={this.props.formValues.firstName}
            ></input>
            <label> Last Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="lastName"
              value={this.props.formValues.lastName}
            ></input>
            <label> Email</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="email"
              name="email"
              value={this.props.formValues.email}
            ></input>
            <label> Job Title</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="jobTitle"
              value={this.props.formValues.jobTitle}
            ></input>
            <label> Twitter</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="twitter"
              value={this.props.formValues.twitter}
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
