import React, { Component } from "react";

class About extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="container main-content">
          <div className="row">
            <div className="col">
              <h1 className="text-center">All about Carl</h1>
              <p>
                This is virtually a copy of my CV. I have more information and,
                as always, references can be supplied, just contact me!
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div>
                <h1>Education</h1>
                <h3>Degree</h3>
                <p>First className BA (Hons) in Broadcast Journalsim</p>
                <h3>A-Levels</h3>
                <p>Music Technology, Media Studies and Psychology</p>
                <h3>AS-Levels</h3>
                <p>Biology and Chemistry</p>
                <hr />
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <h1>Employment</h1>
                <h5>Technical Operator (Sound Engineer)</h5>
                <h6>BBC (2014-present)</h6>
                <p>
                  Responsible for studio and location sound for various
                  award-winning programmes.
                </p>
                <h5>Marketing co-ord</h5>
                <h6>i-occupy (2013-2014)</h6>
                <p>
                  Increased social following of a leading property firm by
                  nearly 200%.
                </p>
                <hr />
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <h1>Programming</h1>
                <p>Here are the languages I'm familiar with:</p>
                <ul>
                  <li>
                    JavaScript <em>(Intermediate)</em>
                  </li>
                  <li>
                    ES6 <em>(Intermediate)</em>
                  </li>
                  <li>
                    HTML <em>(Advanced)</em>
                  </li>
                  <li>
                    CSS <em>(Intermediate)</em>
                  </li>
                  <li>
                    PHP&nbsp;<em>(Newcomer)</em>
                  </li>
                  <li>
                    Python&nbsp;<em>(Newcomer)</em>
                  </li>
                </ul>
                <p>And the frameworks/technologies:</p>
                <ul>
                  <li>
                    ReactJS&nbsp;<em>(Intermediate)</em>
                  </li>
                  <li>
                    Node.js&nbsp;<em>(Intermediate)</em>
                  </li>
                  <li>
                    IP&nbsp;<em>(Newcomer)</em>
                  </li>
                  <li>
                    MongoDB&nbsp;<em>(Newcomer+)</em>
                  </li>
                  <li>
                    Express.js&nbsp;<em>(Newcomer+)</em>
                  </li>
                </ul>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default About;
