import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="page-footer fooTer">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">EEZ Trailers</h5>
            <p className="grey-text text-lighten-4">
              View all movie trailers in the most convinient way
            </p>
            <Link to="/" className="brand-logo">
              <img
                src="/img/logo5.png"
                style={{ width: "5rem", height: "3rem", marginTop: ".5rem" }}
                alt="logo"
              />
            </Link>
          </div>
          <div className="col l4 offset-l2 s12">
            <ul>
              <li>
                <Link className="grey-text text-lighten-3" to="/">
                  About us
                </Link>
              </li>
              <li>
                <Link className="grey-text text-lighten-3" to="/">
                  Policy
                </Link>
              </li>
              <li>
                <Link className="grey-text text-lighten-3" to="/">
                  Privacy
                </Link>
              </li>
              <li>
                <Link className="grey-text text-lighten-3" to="/">
                  Pontact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          © 2023 Copyright Text
          <Link className="grey-text text-lighten-4 right" to="/">
            Owned by: Eze Stanley
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
