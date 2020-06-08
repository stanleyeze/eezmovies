import React, { Component } from "react";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import { fetchSearchResults, loginModalClose } from "../actions";
import { fetchVideo } from "../actions/movies";
import { renderOnChangeSearch } from "./utils/formFields";
import LoginModal from "./utils/LoginModal";
import SearchForm from "./utils/SearchForm";
import MovieGrid from "./utils/MovieGrid";

class Search extends Component {
  async componentDidMount() {
    this.props.fetchSearchResults(
      [],
      this.props.match.params.querry,
      this.props.match.params.page
    );

    //event listener

    // document.addEventListener("scroll", () => {
    //   const scrolable =
    //     document.documentElement.scrollHeight - window.innerHeight;
    //   const scrolled = window.scrollY;

    //   if (scrolable === scrolled) {
    //     const { fetchSearchResults, searchResult, match } = this.props;
    //     const { results, page, total_pages } = searchResult;
    //     const querry = match.params.querry;
    //     const intPage = parseInt(page);
    //     if (page !== total_pages)
    //       fetchSearchResults(results, querry, intPage + 1);
    //   }
    // });
  }

  handleSearch = (formValues) => {
    const { searchSearchForm } = { ...this.props.searchForm };
    const newSearchSearchForm = { ...searchSearchForm };

    if (newSearchSearchForm.values) {
      this.props.fetchSearchResults([], newSearchSearchForm.values.search, 1);
    }
  };

  handleShowMore = () => {
    const { fetchSearchResults, searchResult, match } = this.props;
    const { results, page } = searchResult;
    const querry = match.params.querry;
    const intPage = parseInt(page);
    fetchSearchResults(results, querry, intPage + 1);
  };

  handleFetchVideo = (id) => {
    this.props.fetchVideo(id);
  };
  handleCloseModal = () => {
    this.props.loginModalClose();
  };
  render() {
    const { searchResult, loader } = this.props;
    const newSearchResult = { ...searchResult };
    return (
      <React.Fragment>
        <SearchForm
          renderOnChangeSearch={renderOnChangeSearch}
          handleSearch={this.handleSearch}
          title="Search Results"
        />
        <MovieGrid
          newMovies={newSearchResult}
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
  if (state.searchResult && state.searchResult.results) {
    return {
      searchForm: newForm,
      searchResult: { ...state.searchResult },
      loader: state.loader,
    };
  } else {
    return {};
  }
};

export default connect(mapStateToProps, {
  fetchSearchResults,
  fetchVideo,
  loginModalClose,
})(reduxForm({ form: "searchSearchForm" })(Search));
