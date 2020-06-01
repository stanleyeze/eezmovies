import React from "react";
import { Field, reduxForm } from "redux-form";

const SearchNavOnSubmit = (props) => {
  const {
    renderSearch,
    handleSearch,
    handleSubmit,
    page,
    querry,
    previousResults,
  } = props;
  return (
    <nav>
      <div class="nav-wrapper">
        <form
          onSubmit={handleSubmit(
            handleSearch.bind(previousResults, querry, page + 1)
          )}
        >
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
  );
};

export default SearchNavOnSubmit;
