import React from "react";
import { Field } from "redux-form";

const SearchForm = ({ renderOnChangeSearch, handleSearch, title }) => {
  return (
    <section className="search_search">
      <div className="row">
        <div className="container searchform">
          <div className="col s3 searchform-pageTitle">
            <h4>
              {title === "Search Results"
                ? "Search Results"
                : title + " movies"}
            </h4>
          </div>
          <div className="col s7 offset-s2 right-align searchform-form">
            <nav>
              <div class="nav-wrapper searchform-form_navwrapper">
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
                    handleSearch={handleSearch}
                  />
                </form>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchForm;
