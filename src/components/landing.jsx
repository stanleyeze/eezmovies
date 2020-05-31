import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { renderSearch } from "./utils/formFields";

class LandingPage extends Component {
  handleSearch = (formValues) => {
    const { target } = formValues;
    //console.log(target.value);
  };
  render() {
    const searchString = { ...this.props.form1 };
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
                  <form>
                    <Field
                      name="search"
                      label="search"
                      component={renderSearch}
                      id="search"
                      type="search"
                      onChange={this.handleSearch}
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

export default connect(mapStateToProps)(
  reduxForm({ form: "searchForm" })(LandingPage)
);
