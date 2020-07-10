import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import Navigation from "./Components/Navigation/index.js";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      <Router>
        <Navigation />

        <Route
          path={process.env.PUBLIC_URL + "/"}
          exact={true}
          component={Home}
        />
        <Route path={process.env.PUBLIC_URL + "/about"} component={About} />
        <Route
          path={process.env.PUBLIC_URL + "/projects"}
          component={Projects}
        />
        <Route path={process.env.PUBLIC_URL + "/contact"} component={Contact} />
        <Footer />
      </Router>
    </>
  );
}

export default App;
