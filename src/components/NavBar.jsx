import React, { Component } from "react";
import M from "materialize-css";

import { Auth } from "aws-amplify";
import { connect } from "react-redux";
import { signup, session } from "../actions";
import Button from "./utils/Button";
import { Link } from "react-router-dom";

class NavBar extends Component {
  state = {
    username: "ufondu2",
    password: "Ufondu1232.",
    attributes: { email: "stanl2@gmail.com", phone_number: "+123243242" },
  };

  componentWillMount() {
    this.props.session();
  }

  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      //sidebar trigger
      var elems = document.querySelectorAll(".sidenav");
      var instances = M.Sidenav.init(elems, {});

      //dropdown trigger
      var elems2 = document.querySelectorAll(".dropdown-trigger");
      var instances = M.Dropdown.init(elems2, { coverTrigger: false });
    });
  }
  handleSignUp = () => {
    const { username, password, attributes } = this.state;
    this.props.signup(username, password, attributes);
  };

  render() {
    return (
      <React.Fragment>
        <nav className="blue-grey darken-4">
          <div className="container">
            <div class="nav-wrapper">
              <a href="#!" class="brand-logo left">
                <img
                  src="./img/logo2.png"
                  style={{ width: "3rem", height: "3rem", marginTop: ".5rem" }}
                  alt="logo"
                />
              </a>
              <a href="#" data-target="mobile-demo" class="sidenav-trigger">
                <i class="material-icons">menu</i>
              </a>
              <ul class="right hide-on-med-and-down">
                <li>
                  <a href="badges.html">Home</a>
                </li>
                <li>
                  <a href="collapsible.html">API</a>
                </li>

                <li>
                  <Link
                    class="waves-effect waves-light btn"
                    onClick={this.handleSignUp.bind()}
                  >
                    Login
                  </Link>
                  <Link
                    class="waves-effect waves-light btn"
                    onClick={this.handleSignUp.bind()}
                  >
                    SignUp
                  </Link>
                </li>

                {/* <li>
                  <a class="dropdown-trigger" href="#!" data-target="dropdown1">
                    Stanley<i class="material-icons right">arrow_drop_down</i>
                  </a>
                </li> */}
              </ul>
            </div>{" "}
          </div>
        </nav>
        <ul id="dropdown1" class="dropdown-content">
          <li>
            <a href="#!">Profile</a>
          </li>
          <li>
            <a href="#!">LogOut</a>
          </li>
        </ul>
        <ul class="sidenav" id="mobile-demo">
          <li>
            <a href="sass.html">Sass</a>
          </li>
          <li>
            <a href="badges.html">Components</a>
          </li>
          <li>
            <a href="collapsible.html">Javascript</a>
          </li>
          <li>
            <a href="mobile.html">Mobile</a>
          </li>
        </ul>{" "}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.login,
  };
};
export default connect(mapStateToProps, {
  signup,
  session,
})(NavBar);
