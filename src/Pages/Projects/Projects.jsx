import React, { Component } from "react";
import { FaArrowRight, FaGithub, FaGlobe, FaTimesCircle } from "react-icons/fa";

class Projects extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <div class="container main-content">
          <div class="row">
            <div class="col">
              <h1 class="text-center">Current and recent projects</h1>
              <p>
                While I don't have the most experience, I've been learning as
                much as I can. Below are some of the projects that I have worked
                on, and links to either the live product or the GitHub repo.
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Liztea</h4>
                  <h6 class="text-muted card-subtitle mb-2">
                    Simple shopping list generator
                  </h6>
                  <p class="card-text">
                    My wife put me in charge of the weekly shop, but I hate
                    writing lists. This solves the problem by generating a
                    comprehensive list based of the meals you are having that
                    week. There are public and private recipes, and individual
                    items you can add too!
                  </p>
                  <a
                    class="card-link"
                    href="https://liztea.quartersight.co.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View the app&nbsp;
                    <FaArrowRight />
                    <FaGlobe />
                  </a>
                </div>
              </div>
              <hr />
            </div>
            <div class="col-md-4">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Pident</h4>
                  <h6 class="text-muted card-subtitle mb-2">
                    Broadcast audio playout
                  </h6>
                  <p class="card-text">
                    A simple solution to an expensive problem. Rather than
                    replacing broken equipment with more outdated tech, I built
                    a simple touchscreen solution for playing out various audio
                    furniture used in local regional news.
                  </p>
                  <a
                    class="card-link"
                    href="http://www.github.com/quartersight/pident"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub&nbsp;
                    <FaArrowRight />
                    <FaGithub />
                  </a>
                </div>
              </div>
              <hr />
            </div>
            <div class="col-md-4">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Breathe Serenity</h4>
                  <h6 class="text-muted card-subtitle mb-2">
                    Simple static site build
                  </h6>
                  <p class="card-text">
                    Another simple static site built for a hypnotherapist in the
                    south east.
                  </p>
                  <a
                    class="card-link"
                    href="http://www.breatheserenity.co.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit the site&nbsp;
                    <FaArrowRight />
                    <FaGlobe />
                  </a>
                </div>
              </div>
              <hr />
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Oyster Create</h4>
                  <h6 class="text-muted card-subtitle mb-2">
                    Web design and build
                  </h6>
                  <p class="card-text">
                    A fully designed and hosted website for a creative design
                    agency. And yes, I might have a hand in that firm...
                  </p>
                  <a
                    class="card-link"
                    href="http://www.oystercreate.co.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit the site&nbsp;
                    <FaArrowRight />
                    <FaGlobe />
                  </a>
                </div>
              </div>
              <hr />
            </div>
            <div class="col-md-4">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Pident 2</h4>
                  <h6 class="text-muted card-subtitle mb-2">
                    Broadcast audio playout
                  </h6>
                  <p class="card-text">
                    An updated version which has more commercial potential and
                    scalability. Physical interfaces, a web client for managing
                    audio and a nice rack mounted unit are some of the
                    improvements this version offers. This is an ongoing
                    project.
                  </p>
                  No public code, sorry!&nbsp;
                  <FaArrowRight />
                  <FaTimesCircle />
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Projects;
