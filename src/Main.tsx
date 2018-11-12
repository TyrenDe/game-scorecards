import * as React from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";

import * as Theme from "./Theme";
import Home from "./Home";
import Split from "./Split/Split";
import About from "./About";

const MainWindow = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 1vmin);
  color: ${ Theme.PrimaryColor };
  padding: 5px;
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