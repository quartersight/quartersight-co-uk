import React, { Component } from "react";
import { Link } from "@reach/router";

import {
  FaGithub,
  FaTwitter,
  FaLinkedinIn,
  FaProjectDiagram,
  FaUserAlt,
  FaHome,
  FaMarker,
} from "react-icons/fa";

class Navigation extends Component {
  render() {
    return (
      <>
        <nav
          className="col-md-2 d-none d-md-block bg-light sidebar"
          id="navBarSide"
        >
          <div className="sidebar-sticky">
            <ul className="nav flex-column mt-3 pl-2">
              <li className="nav-item my-1 align-self-middle">
                <Link to="/">
                  <span className="mr-2 ">
                    <FaHome />
                  </span>
                  Home
                </Link>
              </li>
              <li className="nav-item my-1 align-self-middle">
                <Link to="/about">
                  <span className="mr-2 ">
                    <FaUserAlt />
                  </span>
                  About
                </Link>
              </li>
              <li className="nav-item my-1 align-self-middle">
                <Link to="/projects">
                  <span className="mr-2 ">
                    <FaProjectDiagram />
                  </span>
                  Projects
                </Link>
              </li>
              <li className="nav-item my-1">
                <Link to="/contact">
                  <span className="mr-2 ">
                    <FaMarker />
                  </span>
                  Contact
                </Link>
              </li>
            </ul>

            <h6 className="d-flex mt-4 mb-1 text-muted font-weight-bolder">
              {" "}
              Why quartersight?{" "}
            </h6>
            <p className="text-muted">
              I've always been called four-eyes, then I lost sight in one eye.
              <br />
              <br />
              One out of four.
              <br />
              <br />
              <span className="font-weight-bold font-italic">
                Quarter Sight.
              </span>
              <br />
              <br />
              What's a bit of self-depricating humour between friends?
            </p>
            <h2 className="text-muted text-center mt-5">
              <a href="https://github.com/quartersight">
                <span className="mx-2">
                  <FaGithub />
                </span>
              </a>
              <a href="https://twitter.com/quartersight">
                <span className="mx-2">
                  <FaTwitter />
                </span>
              </a>
              <a href="https://linkedin.com/in/carldtrnr ">
                <span className="mx-2">
                  <FaLinkedinIn />
                </span>
              </a>
            </h2>
          </div>
        </nav>
      </>
    );
  }
}

export default Navigation;
