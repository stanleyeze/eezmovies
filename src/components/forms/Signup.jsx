import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

import { renderInput } from "../utils/formFields";
import { signups } from "../../actions";
import Button from "../utils/Button";

class SignUpForm extends Component {
  onSubmit = (formValues) => {
    const {
      firstname,
      lastname,
      email,
      phone,
      password,
      username,
    } = formValues;
    const attributes = {
      given_name: firstname,
      family_name: lastname,
      phone_number: phone,
      email: email,
    };
    this.props.signup(username, password, attributes);
  };
  UNSAFE_componentWillMount() {}

  render() {
    return (
      <div className="section login_section">
        <div className="z-depth-3 form">
          <div className="form_login">
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
              <Field
                name="username"
                label="Username"
                component={renderInput}
                type="text"
                id="username"
                placeholder="Enter Username"
                icon="account_circle"
              />
              <Field
                name="firstname"
                label="Firstname"
                component={renderInput}
                type="text"
                id="firstname"
                placeholder="Enter Firstname"
                icon="person"
              />
              <Field
                name="lastname"
                label="Lastname"
                component={renderInput}
                type="text"
                id="lastname"
                placeholder="Enter Lastname"
                icon="person"
              />
              <Field
                name="email"
                label="Email"
                component={renderInput}
                type="text"
                id="email"
                placeholder="Enter Email Address"
                icon="email"
              />
              <Field
                name="phone"
                label="Phone Number"
                component={renderInput}
                type="tel"
                id="phone"
                placeholder="Enter Phone Number"
                icon="phone"
              />
              <Field
                name="password"
                label="Password"
                component={renderInput}
                type="text"
                id="password"
                placeholder="Enter Password"
                icon="security"
              />
              <Button name="Sign Up" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const validate = (formValue) => {
  const errors = {};
  if (!formValue.firstname) {
    //something here
    errors.firstname = "Firstname must not be empty";
  }
  if (!formValue.username) {
    //something here
    errors.username = "Username must not be empty";
  }

  if (!formValue.lastname) {
    //something here
    errors.lastname = "Lastname field must not be empty";
  }

  if (!formValue.email) {
    //something here
    errors.login = "Login must not be empty";
  }

  if (!formValue.phone) {
    //something here
    errors.phone = "Enter a valid phone number";
  }

  if (!formValue.password) {
    //something here
    errors.password = "Password field must not be empty";
  }
  return errors;
};

const mapStateToProps = (state) => {
  if (state.loginForm) {
    const { loginForm } = state.form;
    console.log(loginForm);
    return {
      login: state.auth,
      form1: { ...loginForm.values },
    };
  } else {
    return {};
  }
};

export default connect(mapStateToProps, { signups })(
  reduxForm({ form: "signupform", validate })(SignUpForm)
);

// export default connect(mapStateToProps, {
//   signinWithEmailAndPassword,
// })(reduxForm({ form: "loginForm", validate })(LoginForm));
