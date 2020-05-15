import React from "react";
import header from "../images/platziconf-logo.svg";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

import "./styles/BadgeNew.css";

class BadgeNew extends React.Component {
  state = {
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: "",
      avatarUrl: ""
    }
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img className="BadgeNew__hero__image img-fluid" src={header} alt="headers"></img>
        </div>
        <div>
          <div className="container">
            <div className="row">
              <div className="col-6">
                <Badge
                  firstName={this.state.form.firstName || 'First Name'}
                  lastName={this.state.form.lastName || 'Last Name'}
                  avatarUrl={this.state.form.avatarUrl || "https://www.gravatar.com/avatar/0fc6d5ee2ee176d4581acf6a7e5644cc?d=identicon"}
                  jobTitle={this.state.form.jobTitle || "Job Title"}
                  twitter={this.state.form.twitter || "Twitter"}
                />
              </div>
              <div className="col-6">
                <BadgeForm
                  onChange={this.handleChange}
                  formValues={this.state.form}
                />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
