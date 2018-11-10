import * as React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Split from "./Split";
import About from "./About";

import "./App.css";

class Main extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/split' component={Split} />
          <Route path='/about' component={About} />
        </Switch>
      </div>
    );
  }
};

export default Main;