import React from "react";

export const renderInput = ({ input, meta, label, type, id, placeholder }) => {
  const { error, touched } = meta;
  return (
    <div class="input-field col s6">
      <i class="material-icons prefix">email</i>
      <input
        {...input}
        type={type}
        className={touched && error ? "validate" : "validate"}
        id={id}
        // placeholder={placeholder}
      />
      <label htmlFor={id}>{label}</label>
      {/* {meta.touched ? (
        <label id={id} className="validate">
          {error}
        </label>
      ) : (
        ""
      )} */}
    </div>
  );
};

export const renderInputNoLabel = ({ input, meta, type, id, placeholder }) => {
  const { error, touched } = meta;
  return (
    <div className="form-group">
      <input
        {...input}
        type={type}
        className={
          touched && error ? "form-control is-invalid" : "form-control"
        }
        id={id}
        placeholder={placeholder}
      />
      {meta.touched ? (
        <small id={id} className="form-text is-invalid text-muted">
          {error}
        </small>
      ) : (
        ""
      )}
    </div>
  );
};

export const renderCheckBox = ({ input, label, id }) => {
  return (
    <div className="form-check">
      <input type="checkbox" {...input} className="form-check-input" id={id} />
      <label className="form-check-label justify-self-start" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export const renderSearch = ({ input, meta, onSearch }) => {
  if (input.value && input.value !== "") {
    onSearch(input.value);
  }

  return (
    <React.Fragment>
      <input
        {...input}
        className="form-control form-control-sm mr-3 "
        type="text"
        placeholder="Search"
        aria-label="Search"
      />
      <i className="fas fa-search" aria-hidden="true"></i>
    </React.Fragment>
  );
};
