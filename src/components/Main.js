import React, { Component, Fragment } from "react";
import About from "./About";
import Home from "./Home";
import Navbar from '../Navbar';

import { BrowserRouter as Router, Route} from "react-router-dom";

// <Route path="/pricing"
// render= { () => <Pricing pricing={this.state.pricing} /> }
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
    <Router>
    <Fragment>
    <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/about" component = {About}/>
    </Fragment>
    </Router>

    );
  }
}

export default Main;
