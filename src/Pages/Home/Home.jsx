import React, { Component } from "react";
import { Link } from "@reach/router";

class Home extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="row">
          <div className="col-4">
            <img
              className="img-thumbnail rounded"
              src={require("../../Images/Carl_And_Isaac.jpg")}
              alt="Carl and Isaac sitting in the sun."
            />
          </div>
          <div className="col-2">
            <h1>Home</h1>
            <h4>Quarter sight, full vision.</h4>
            <p>
              Hello, my name is Carl and I'm starting my career in development.
              Take a look around and if you like what you see,{" "}
              <Link to="/contact">send me a message</Link>!
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
