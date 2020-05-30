import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "../utils/Button";
import { logout } from "../../actions/auth";

class LogoutForm extends Component {
  onSubmit = () => {
    this.props.logout();
  };

  render() {
    return (
      <div className="section login_section">
        <div className="z-depth-3 form">
          <div className="form_login">
            <center>
              <h5>Confirm Logout</h5>
            </center>
            <Button name="Continue" onClick={this.onSubmit} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, {
  logout,
})(LogoutForm);
