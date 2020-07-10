import React, { Component } from "react";
import {
  FaGithub,
  FaTwitter,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

class Footer extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <footer>
          <div className="row justify-content-center">
            <div className="col-6 col-sm-6 col-md-4 footer-contacts">
              <div>
                <FaMapMarkerAlt className="mr-2" />
                <p className="mb-0">Norfolk, England</p>
              </div>
              <div className="mt-3">
                <FaEnvelope className="mr-2" />
                <p className="mb-0">
                  <a
                    href="mailto:carl@quartersight.co.uk"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    carl@quartersight.co.uk
                  </a>
                </p>
              </div>
              <div className="social-links social-icons">
                <a
                  href="http://www.github.com/quartersight"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaGithub />
                </a>
                <a
                  href="http://www.twitter.com/quartersight"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaTwitter />
                </a>
                <a
                  href="http://www.linkedin.com/in/carldtrnr"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
            <div className="clearfix"></div>
            <div className="col-md-4 footer-about">
              <h4>Why Quarter Sight?</h4>
              <p>
                I've always been called four-eyes, then I lost sight in one eye.
                <br />
                <br />
                One out of four.
                <br />
                <br />
                <strong>
                  <em>Quarter Sight.</em>
                </strong>
                <br />
                <br />
                What's a bit of self-depricating humour between friends?
              </p>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
