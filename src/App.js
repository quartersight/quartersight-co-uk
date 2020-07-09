import React from "react";
import Navigation from "./Components/Navigation/index.js";
import { Router } from "@reach/router";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Navigation />

          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
            <Router>
              <Home path="/" exact />
              <About path="/about" />
              <Projects path="/projects" />
              <Contact path="/contact" />
            </Router>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
