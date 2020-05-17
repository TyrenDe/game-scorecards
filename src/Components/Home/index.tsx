import * as React from 'react';
import * as Mui from '@material-ui/core';
import Footer from '../Footer';
import { bind } from 'decko';

class Home extends React.Component<{}, {}> {
  @bind
  public render(): React.ReactNode {
    return (
      <React.Fragment>
        <Mui.Typography variant='h5'>
          <p>Welcome to a quick and dirty way to keep track of scores on the go. This site allows you to add players, then
          track scores for those players in a variety of games.  This is designed to be lightweight and quick to use.
          It does NOT keep track of stats, players, or games across browser sessions.</p>

          <p>It does use the local browser storage to maintain state to avoid accidentally losing the current session game
          data.</p>
        </Mui.Typography>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
