import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="container main-content">
          <div className="row">
            <div className="col-md-5">
              <img
                className="img-fluid"
                src={require("../../Images/Carl_And_Isaac.jpg")}
                alt="Carl and Isaac in the sun."
              />
            </div>
            <div className="col">
              <h1>Welcome to QuarterSight Code</h1>
              <h4>Join me on my journey to become a WebDev</h4>
              <p>
                My name is Carl and I'm an aspiring web developer. I'm mainly
                interested in JavaScript, and I've focused on self-teaching
                (with a little guidance) the MERN stack. That's MongoDB,
                ExpressJS, ReactJS, and Node.js.
              </p>
              <p className="blockquote px-5">
                "I am an extremely motivated and focused individual, with many
                years’ experience in different industries and roles, which gives
                me a broad and comprehensive knowledge. I am quick to learn
                procedures and processes and have a keen eye for detail which
                will lead to fluid and transparent work, and in turn client
                satisfaction. My positive and forward-thinking attitude combined
                with a calm, professional demeanour delivers detailed and
                accurate results."
              </p>
              <p>In other words: I work hard.</p>
              <p>
                Am I the best developer that you're going to employ? No. But am
                I the best developer I can be, always striving to learn and
                build on what I know? Yes, that's me.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
