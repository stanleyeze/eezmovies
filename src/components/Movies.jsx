import React, { Component } from "react";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import {
  fetchAll,
  fetchVideo,
  loginModalClose,
  fetchSearchResults,
} from "../actions/index";
import MovieGrid from "./utils/MovieGrid";
import LoginModal from "./utils/LoginModal";
import SearchForm from "./utils/SearchForm";
import { renderOnChangeSearch } from "./utils/formFields";

class Movies extends Component {
  async componentDidMount() {
    console.log(this.props.match.params.category, "did mount!");
    this.props.fetchAll([], this.props.match.params.category, 1);
  }

  handleShowMore = () => {
    const { movies, match } = this.props;
    const { results, page } = movies;
    const intPage = parseInt(page);
    this.props.fetchAll(results, match.params.category, intPage + 1);
  };
  handleSearch = (formValues) => {
    const { searchSearchForm } = { ...this.props.searchForm };
    const newSearchSearchForm = { ...searchSearchForm };

    if (newSearchSearchForm.values) {
      this.props.fetchSearchResults([], newSearchSearchForm.values.search, 1);
    }
  };

  handleFetchVideo = (id) => {
    this.props.fetchVideo(id);
  };
  handleCloseModal = () => {
    this.props.loginModalClose();
  };

  render() {
    const { movies, loader } = this.props;
    const newMovies = { ...movies };
    return (
      <React.Fragment>
        <SearchForm
          renderOnChangeSearch={renderOnChangeSearch}
          handleSearch={this.handleSearch}
          title={this.props.match.params.category}
        />
        <MovieGrid
          newMovies={newMovies}
          handleShowMore={this.handleShowMore}
          loader={loader}
          handleFetchVideo={this.handleFetchVideo}
          handleSearch={this.handleSearch}
        />
        {loader && loader.login_modal_open ? (
          <LoginModal
            open={loader.login_modal_open}
            handleCloseModal={this.handleCloseModal}
          />
        ) : (
          ""
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  const newForm = { ...state.form };
  if (state.movies && state.movies.results) {
    return {
      searchForm: newForm,
      movies: { ...state.movies },
      loader: state.loader,
    };
  } else {
    return {};
  }
};

export default connect(mapStateToProps, {
  fetchAll,
  fetchVideo,
  loginModalClose,
  fetchSearchResults,
})(reduxForm({ form: "searchSearchForm" })(Movies));
