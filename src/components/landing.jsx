import React, { Component } from "react";
import SignUpForm from "./forms/Signup";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <div class="section login_section">
          <div className="z-depth-3 form">
            <SignUpForm />
          </div>
        </div>
        {/* <p>Home</p>
        <h1>Header 1</h1>
        <h2>Header 2</h2>
        <h3>Header 3</h3>
        <h4>Header 4</h4>
        <h5>MHeader 5</h5> */}
      </div>
    );
  }
}

export default LandingPage;
