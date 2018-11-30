import * as React from "react";
import { Switch, Route } from "react-router-dom";

import { MainWindow } from "./Styles";

import Home from "../Home/Home";
import Split from "../Split/Split";
import About from "../About/About";
import MilleBornes from "../MilleBornes/MilleBornes";

class Main extends React.Component {
  public render(): React.ReactNode {
    return (
      <MainWindow>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/split' component={Split} />
          <Route path='/millebornes' component={MilleBornes} />
          <Route path='/about' component={About} />
        </Switch>
      </MainWindow>
    );
  }
}

export default Main;
