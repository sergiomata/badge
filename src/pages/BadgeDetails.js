import React from "react";
import { Link } from "react-router-dom";
import header from "../images/platziconf-logo.svg";
import Badge from "../components/Badge";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import api from "../api";
import "./styles/BadgeDetails.css";
import confLogo from "../images/platziconf-logo.svg";

class BadgeDetails extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.read(
        this.props.match.params.id
      );
      this.setState({
        loading: false,
        data: data
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error
      });
    }
  }

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
      await api.badges.update(this.props.match.params.id, this.state.form);
      this.setState({ loading: false });

      //Redirect if success
      this.props.history.push("/Badges");
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />
    }
    if (this.state.error) {
      return <PageError error={this.state.error} />
    }

    const badge = this.state.data;
    return (
      <React.Fragment>
        <div className="BadgeDetails__hero">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <img src={confLogo} alt="conference logo"></img>
              </div>
              <div className="col-6 BadgeDetails__hero-attendant-name" >
                <h1> {badge.firstName} {badge.lastName}</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName={badge.firstName}
                lastName={badge.lastName}
                email={badge.email}
                twitter={badge.twitter}
                jobTitle={badge.jobTitle}
              />
            </div>
            <div className="col" >
              <h2> Actions</h2>
              <div className="">
                <div className="btn btn-primary mb-4">
                  <Link to={`/badges/${badge.id}/Edit`}>
                    Edit
                    </Link>
                </div>
                <div>
                  <button className="btn btn-danger">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment >
    );
  }


};

export default BadgeDetails;