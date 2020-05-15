import React from "react";
import { Link } from "react-router-dom";

import "./styles/Badge.css";
import confLogo from "../images/badge-header.svg";
import BadgesList from "./BadgesList";
import api from "../api";

class Badge extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      error: null,
      data: undefined,
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    this.setState({ lading: true, error: null });

    try {
      const data = await api.badges.list();
      this.setState({
        loading: false,
        data: data,
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    console.log({
      prevProps: prevProps,
      prevState: prevState,
    });

    console.log({
      props: this.props,
      state: this.state,
    });
  }

  componentWillUnmount() { }

  render() {
    if (this.state.loading) {
      return "loading...";
    }
    if (this.state.error) {
      return `Error: ${this.state.error}`;
    }

    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges_conf-logo"
                src={confLogo}
                alt="Conf Logo"
              />
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>

          <BadgesList badges={this.state.data} />
        </div>
      </React.Fragment>
    );
  }
}

export default Badge;
