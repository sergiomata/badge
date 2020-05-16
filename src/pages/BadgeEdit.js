import React from "react";
import header from "../images/platziconf-logo.svg";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import PageLoading from "../components/PageLoading";
import api from "../api";
import "./styles/BadgeEdit.css";

class BadgeEdit extends React.Component {
  state = {
    loading: true,
    error: null,
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: "",
      avatarUrl: ""
    }
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
        form: data
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
    return (
      <React.Fragment>
        <div className="BadgeEdit__hero">
          <img className="BadgeEdit__hero__image img-fluid" src={header} alt="headers"></img>
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
                <h1> Edit Attendant</h1>
                <BadgeForm
                  onChange={this.handleChange}
                  onSubmit={this.handleSubmit}
                  formValues={this.state.form}
                  error={this.state.error}
                />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment >
    );
  }


};

export default BadgeEdit;