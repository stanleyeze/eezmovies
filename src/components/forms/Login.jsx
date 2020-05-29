import React, { Component } from "react";
import { Field, reduxForm, formValueSelector } from "redux-form";
import { connect } from "react-redux";
import history from "../../history";

import { renderInput } from "../utils/formFields";
import { signinWithEmailAndPassword } from "../../actions";
import Button from "../utils/Button";
import { Auth } from "aws-amplify";

class LoginForm extends Component {
  async componentDidMount() {
    await Auth.currentAuthenticatedUser({
      bypassCache: false,
    })
      .then((user) => {
        if (user.username) {
          history.push("/");
        }
      })
      .catch((err) => console.log(err));
  }

  onSubmit = (formValues) => {
    const { username, password } = formValues;
    this.props.signinWithEmailAndPassword(username, password);
  };

  render() {
    console.log(this.props.form1);
    const form2 = { ...this.props.form1 };
    console.log(form2.email);
    return (
      <div class="section login_section">
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
      login: state.auth,
      form1: { ...loginForm.values },
    };
  }
};

export default connect(mapStateToProps, { signinWithEmailAndPassword })(
  reduxForm({ form: "loginForm" })(LoginForm)
);
