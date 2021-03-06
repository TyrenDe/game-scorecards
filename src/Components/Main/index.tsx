import * as React from 'react';
import * as Mui from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';
import { bind } from 'decko';

import Home from '../Home';
import About from '../About/About';
import Generic from '../Generic';
import MilleBornes from '../MilleBornes';
import Mu from '../Mu';
import Qwixx from '../Qwixx';
import Split from '../Split';

class Main extends React.Component<{}, {}> {
  @bind
  public render(): React.ReactNode {
    return (
      <Mui.Box m={2}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/split' component={Split} />
          <Route exact path='/millebornes' component={MilleBornes} />
          <Route exact path='/mu' component={Mu} />
          <Route exact path='/qwixx' component={Qwixx} />
          <Route exact path='/generic' component={Generic} />
          <Route exactpath='/about' component={About} />
        </Switch>
      </Mui.Box>
    );
  }
}

export default Main;
