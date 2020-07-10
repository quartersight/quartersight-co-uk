import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

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

        <Route path="/" exact={true} component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Footer />
      </Router>
    </>
  );
}

export default App;
