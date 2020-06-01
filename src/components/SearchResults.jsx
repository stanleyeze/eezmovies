import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import SearchNavOnChange from "./utils/searchNav";
import { fetchSearchResults } from "../actions/search";
import { renderOnChangeSearch } from "./utils/formFields";
import CardHorizontal from "./utils/CardHorizontal";

class Search extends Component {
  async componentDidMount() {
    this.props.fetchSearchResults(
      [],
      this.props.match.params.querry,
      this.props.match.params.page
    );
  }

  handleSearch = (formValues) => {
    const { searchSearchForm } = { ...this.props.searchForm };
    const newSearchSearchForm = { ...searchSearchForm };

    if (newSearchSearchForm.values) {
      this.props.fetchSearchResults([], newSearchSearchForm.values.search, 1);
    }
  };
  render() {
    const { searchResult } = this.props;
    const newSearchResult = { ...searchResult };
    console.log(newSearchResult.results);
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
          <div className="row teal lighten-2">
            <div className="container">
              {newSearchResult.results &&
              Object.keys(newSearchResult.results).length !== 0
                ? newSearchResult.results.map((result) => {
                    result.poster_path ? console.log("yes") : console.log("no");
                    return (
                      <div class="col s3">
                        <CardHorizontal result={result} />
                      </div>
                    );
                  })
                : "No moview is found!!"}
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
    };
  } else {
    return {};
  }
};

export default connect(mapStateToProps, { fetchSearchResults })(
  reduxForm({ form: "searchSearchForm" })(Search)
);
