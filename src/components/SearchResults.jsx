import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { fetchSearchResults } from "../actions/search";
import { fetchVideo } from "../actions/movies";
import { renderOnChangeSearch } from "./utils/formFields";
import CardHorizontal from "./utils/CardHorizontal";

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
  render() {
    const { searchResult, loader } = this.props;
    const newSearchResult = { ...searchResult };
    return (
      <React.Fragment>
        <section className="search_search">
          <div className="container">
            <center>
              <nav>
                <div class="nav-wrapper">
                  <form>
                    <Field
                      name="search"
                      label="search"
                      component={renderOnChangeSearch}
                      id="search"
                      type="search"
                      required
                      icon="account_circle"
                      placeholder="Search Movies"
                      handleSearch={this.handleSearch}
                    />
                  </form>
                </div>
              </nav>
            </center>
          </div>
        </section>

        <section className="search_result-grid">
          <div className="row ">
            <div className="container">
              {newSearchResult.results &&
              Object.keys(newSearchResult.results).length !== 0
                ? newSearchResult.results.map((result) => {
                    return (
                      <div class="col s6 m4 l3">
                        <CardHorizontal
                          handleFetchVideo={this.handleFetchVideo}
                          result={result}
                        />
                      </div>
                    );
                  })
                : "No moview is found!!"}
              <center>
                {loader && loader.loading ? (
                  <div class="progress">
                    <div class="indeterminate"></div>
                  </div>
                ) : (
                  ""
                )}
                <button onClick={this.handleShowMore}>Show More</button>
              </center>
            </div>
          </div>
        </section>
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

export default connect(mapStateToProps, { fetchSearchResults, fetchVideo })(
  reduxForm({ form: "searchSearchForm" })(Search)
);
