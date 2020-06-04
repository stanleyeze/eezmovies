import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { fetchAll, fetchVideo } from "../actions/index";
import MovieGrid from "./utils/MovieGrid";

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

  handleFetchVideo = (id) => {
    this.props.fetchVideo(id);
  };

  render() {
    const { movies, loader } = this.props;
    const newMovies = { ...movies };
    return (
      <MovieGrid
        newMovies={newMovies}
        handleShowMore={this.handleShowMore}
        loader={loader}
        handleFetchVideo={this.handleFetchVideo}
      />
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

export default connect(mapStateToProps, { fetchAll, fetchVideo })(
  reduxForm({ form: "searchSearchForm" })(Movies)
);
