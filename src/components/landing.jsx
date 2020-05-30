import React, { Component } from "react";
import SignUpForm from "./forms/Signup";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <div className="section display_section">
          <div className="display_section-overlay">
            <div className="container">
              <nav>
                <div class="nav-wrapper">
                  <form>
                    <div class="input-field">
                      <input id="search" type="search" required />
                      <label class="label-icon" for="search">
                        <i class="material-icons">search</i>
                      </label>
                      <i class="material-icons">close</i>
                    </div>
                  </form>
                </div>
                <center>Search Movies</center>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
