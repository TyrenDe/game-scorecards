import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../Home';
import Split from '../Split';
import About from '../About/About';
import MilleBornes from '../MilleBornes';

class Main extends React.Component<{}, {}> {
  public render(): JSX.Element {
    return (
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/split' component={Split} />
          <Route path='/millebornes' component={MilleBornes} />
          <Route path='/about' component={About} />
        </Switch>
    );
  }
}

export default Main;
