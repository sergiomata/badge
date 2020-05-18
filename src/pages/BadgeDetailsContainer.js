import React from "react";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import BadgeDetails from "../components/BadgeDetails";
import api from "../api";


class BadgeDetailsContainer extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
    modalIsOpen: false,
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

  handleOpenModal = () => {
    this.setState({ ...this.state, modalIsOpen: true });
  }

  handleCloseModal = () => {
    this.setState({ ...this.state, modalIsOpen: false });
  }

  handleDeleteBadge = async () => {
    this.setState({ ...this.state, loading: true, error: null });
    try {
      await api.badges.remove(this.props.match.params.id);
      this.setState({ ...this.state, loading: false, error: null });
      this.props.history.push("/Badges");
    } catch (error) {
      this.setState({ ...this.state, loading: false, error: error });
    }
  }

  render() {
    if (this.state.loading) {
      return <PageLoading />
    }
    if (this.state.error) {
      return <PageError error={this.state.error} />
    }

    return (
      <React.Fragment >
        <BadgeDetails
          onOpenModal={this.handleOpenModal}
          onCloseModal={this.handleCloseModal}
          modalIsOpen={this.state.modalIsOpen}
          onDeleteBadge={this.handleDeleteBadge}
          badge={this.state.data}
        />
      </React.Fragment >
    );
  }


};

export default BadgeDetailsContainer;