import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer class="page-footer fooTer">
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="white-text">EEZ Trailers</h5>
            <p class="grey-text text-lighten-4">
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
          <div class="col l4 offset-l2 s12">
            <ul>
              <li>
                <a class="grey-text text-lighten-3" href="#!">
                  About us
                </a>
              </li>
              <li>
                <a class="grey-text text-lighten-3" href="#!">
                  Policy
                </a>
              </li>
              <li>
                <a class="grey-text text-lighten-3" href="#!">
                  Privacy
                </a>
              </li>
              <li>
                <a class="grey-text text-lighten-3" href="#!">
                  Pontact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
          © 2023 Copyright Text
          <a class="grey-text text-lighten-4 right" href="/">
            Owned by: Eze Stanley
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
