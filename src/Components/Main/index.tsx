import * as React from 'react';
import * as Mui from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';

import Home from '../Home';
import About from '../About/About';
import Generic from '../Generic';
import MilleBornes from '../MilleBornes';
import Mu from '../Mu';
import Split from '../Split';

class Main extends React.Component<{}, {}> {
  public render(): JSX.Element {
    return (
      <Mui.Box m={2}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/split' component={Split} />
          <Route path='/millebornes' component={MilleBornes} />
          <Route path='/mu' component={Mu} />
          <Route path='/generic' component={Generic} />
          <Route path='/about' component={About} />
        </Switch>
      </Mui.Box>
    );
  }
}

export default Main;
