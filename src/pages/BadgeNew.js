import React from "react";
import header from "../images/platziconf-logo.svg";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import api from "../api";

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

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true, error: null });

    try {
      await api.badges.create(this.state.form);
      this.setState({ loading: false });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
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
                  firstName={this.state.form.firstName || 'FIRST_NAME'}
                  lastName={this.state.form.lastName || 'LAST_NAME'}
                  twitter={this.state.form.twitter || 'twitter'}
                  jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                  email={this.state.form.email || 'EMAIL'}
                  avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
                />
              </div>
              <div className="col-6">
                <BadgeForm
                  onChange={this.handleChange}
                  onSubmit={this.handleSubmit}
                  formValues={this.state.form}
                />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment >
    );
  }
}

export default BadgeNew;
