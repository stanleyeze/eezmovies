import React, { Component } from "react";
import M from "materialize-css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class NavBar extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      //sidebar trigger
      document.querySelectorAll(".sidenav");

      //dropdown trigger
      var elems2 = document.querySelectorAll(".dropdown-trigger");
      M.Dropdown.init(elems2, { coverTrigger: false });
    });
  }

  render() {
    const { login } = this.props;
    const { username, isSignedIn } = login;
    return (
      <React.Fragment>
        <nav className="blue-grey darken-4">
          <div className="container">
            <div className="nav-wrapper">
              <Link to="#" className="brand-logo left">
                <img
                  src="./img/logo2.png"
                  style={{ width: "3rem", height: "3rem", marginTop: ".5rem" }}
                  alt="logo"
                />
              </Link>
              <Link
                to="#"
                data-target="mobile-demo"
                className="sidenav-trigger"
              >
                <i className="material-icons">menu</i>
              </Link>
              <ul className="right hide-on-med-and-down">
                <li>
                  <Link to="badges.html">Home</Link>
                </li>
                <li>
                  <Link to="collapsible.html">API</Link>
                </li>
                {!isSignedIn ? (
                  <li>
                    <Link
                      className="waves-effect waves-light btn deep-orange accent-3"
                      to="/login"
                    >
                      Login
                    </Link>
                    <Link
                      className="waves-effect waves-light btn deep-orange accent-3"
                      to="/sign-up"
                    >
                      SignUp
                    </Link>
                  </li>
                ) : (
                  <li>
                    <Link
                      className="dropdown-trigger"
                      to="#!"
                      data-target="dropdown1"
                    >
                      {username}
                      <i className="material-icons right">arrow_drop_down</i>
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
          {/* login drop down */}
        </nav>
        <ul id="dropdown1" className="dropdown-content">
          <li>
            <Link to="#">Profile</Link>
          </li>
          <li>
            <Link to="#!">Settings</Link>
          </li>
          <li>
            <Link to="/logout">LogOut</Link>
          </li>
        </ul>
        {/* side nav  */}
        <ul className="sidenav" id="mobile-demo">
          <li>
            <Link to="sass.html">Sass</Link>
          </li>
          <li>
            <Link to="badges.html">Components</Link>
          </li>
          <li>
            <Link to="collapsible.html">Javascript</Link>
          </li>
          <li>
            <Link to="mobile.html">Mobile</Link>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.login,
  };
};
export default connect(mapStateToProps)(NavBar);
