import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { renderSearch } from "./utils/formFields";
import SearchNavOnSubmit from "./utils/searchNav";
import { fetchSearchResults } from "../actions/search";

class LandingPage extends Component {
  handleSearch = (formValues) => {
    const newFormValues = { ...formValues };
    console.log(newFormValues);
    this.props.fetchSearchResults([], newFormValues.search);
  };
  render() {
    const searchString = { ...this.props.form1 };
    console.log(this.props);
    return (
      <div>
        <div className="section display_section">
          <div className="display_section-overlay">
            <div className="container">
              <center>
                <h5>
                  {searchString.search} <span>Results found</span>{" "}
                  <span>next</span>
                </h5>
              </center>
              <nav>
                <div class="nav-wrapper">
                  <form onSubmit={this.props.handleSubmit(this.handleSearch)}>
                    <Field
                      name="search"
                      label="search"
                      component={renderSearch}
                      id="search"
                      type="search"
                      required
                      icon="account_circle"
                      placeholder="Search Movies"
                    />
                  </form>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { searchForm } = state.form;
  if (searchForm && searchForm.values) {
    return {
      form1: { ...searchForm.values },
    };
  } else {
    return {};
  }
};

export default connect(mapStateToProps, { fetchSearchResults })(
  reduxForm({ form: "searchForm" })(LandingPage)
);
