import * as React from "react";
import { Switch, Route } from "react-router-dom";

import styled from "./Theme";
import Home from "./Home";
import Split from "./Split/Split";
import About from "./About";

const MainWindow = styled.div`
  color: ${ props => props.theme.PrimaryColor };

  padding: 10px;
`;

class Main extends React.Component {
  render() {
    return (
      <MainWindow>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/split' component={Split} />
          <Route path='/about' component={About} />
        </Switch>
      </MainWindow>
    );
  }
}

export default Main;