import React from "react";

export const renderInput = ({ input, meta, label, type, id, icon = "" }) => {
  const { error, touched } = meta;
  return (
    <div className="input-field col s6">
      <i className="material-icons prefix">{icon}</i>
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

export const renderSearch = ({
  input,
  label,
  id,
  type,
  placeholder,
  handleSearch,
}) => {
  return (
    <React.Fragment>
      <div class="input-field">
        <input
          {...input}
          id={id}
          type={type}
          placeholder={placeholder}
          required
        />
        <label class="label-icon" for="search">
          <i class="material-icons">{label}</i>
        </label>
        <i class="material-icons">close</i>
      </div>
    </React.Fragment>
  );
};

export const renderOnChangeSearch = ({
  input,
  label,
  id,
  type,
  placeholder,
  handleSearch,
}) => {
  handleSearch(input.value);
  return (
    <React.Fragment>
      <div class="input-field">
        <input
          {...input}
          id={id}
          type={type}
          placeholder={placeholder}
          required
        />
        <label class="label-icon" for="search">
          <i class="material-icons">{label}</i>
        </label>
        <i class="material-icons">close</i>
      </div>
    </React.Fragment>
  );
};
