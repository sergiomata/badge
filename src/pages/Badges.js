
import React from "react";
import { Link } from "react-router-dom";
import confLogo from "../images/badge-header.svg";
import BadgesList from "../components/BadgesList";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import MiniLoader from "../components/MiniLoader";

import "./styles/Badges.css";
import api from "../api";

class Badges extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      error: null,
      data: undefined,
      intervalId: undefined
    };
  }

  async componentDidMount() {
    this.getData();

    //pollling : cada tiempo actualice la informacion
    const intervalId = setInterval(async () => { await this.getData() }, 5000);
    this.setState({
      ...this.state,
      intervalId: intervalId
    })
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  getData = async () => {
    this.setState({ loading: true, error: null });

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

  }

  render() {
    if (this.state.loading === true && !this.state.data) {
      return <PageLoading />;
    }
    if (this.state.error) {
      return <PageError error={this.state.error} />;
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
          {this.state.loading ? <MiniLoader /> : null}
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
