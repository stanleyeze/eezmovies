import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

import { renderInput } from "../utils/formFields";
import { signinWithEmailAndPassword } from "../../actions";
import Button from "../utils/Button";
import history from "../../history";

class LoginForm extends Component {
  onSubmit = (formValues) => {
    const { username, password } = formValues;
    this.props.signinWithEmailAndPassword(username, password);
  };

  componentDidMount() {
    const { isSignedIn } = this.props;
    if (isSignedIn === true) {
      history.push("/");
    }
  }

  render() {
    // const { login } = this.props;
    // const new_login = { ...login };
    // console.log(new_login.isSignedIn);
    return (
      <div className="section login_section">
        <div className="z-depth-3 form">
          <div className="form_login">
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
              {/* <p>{email}</p> */}
              <Field
                name="username"
                label="Username"
                component={renderInput}
                type="text"
                id="username"
                placeholder="Enter Username"
              />
              <Field
                name="password"
                label="Password"
                component={renderInput}
                type="password"
                id="password"
                placeholder="Enter Password"
              />
              <Button name="Login" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const validate = (formValue) => {
  const errors = {};
  if (!formValue.email) {
    //something here
    errors.login = "Login must not be empty";
  }

  if (!formValue.password) {
    //something here
    errors.password = "Password field must not be empty";
  }
  return errors;
};

const mapStateToProps = (state) => {
  const { loginForm } = state.form;
  if (loginForm && loginForm.values) {
    return {
      login: { ...state.login },
      form1: { ...loginForm.values },
    };
  } else {
    return {};
  }
};

export default connect(mapStateToProps, {
  signinWithEmailAndPassword,
})(reduxForm({ form: "loginForm", validate })(LoginForm));
