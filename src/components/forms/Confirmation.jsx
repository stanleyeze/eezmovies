import React, { Component } from "react";
import { Field, reduxForm, formValueSelector } from "redux-form";
import { connect } from "react-redux";

import { renderInput } from "../utils/formFields";
import { confirmSignUp } from "../../actions";
import Button from "../utils/Button";

class ConfirmationForm extends Component {
  onSubmit = (formValues) => {
    const form2 = { ...this.props.form1 };
    const { code } = formValues;
    console.log(form2.username);
    this.props.confirmSignUp("kenstufez", code);
  };

  render() {
    return (
      <div class="section login_section">
        <div className="z-depth-3 form">
          <div className="form_login">
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
              <center>Sign up Confirmation</center>
              <Field
                name="code"
                label="Confirmation Code"
                component={renderInput}
                type="text"
                id="code"
              />
              <Button name="Confirm SignUp" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const validate = (formValue) => {
  const errors = {};
  if (!formValue.code) {
    //something here
    errors.code = "Enter Verification code";
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

export default connect(mapStateToProps, { confirmSignUp })(
  reduxForm({ form: "loginForm" })(ConfirmationForm)
);
