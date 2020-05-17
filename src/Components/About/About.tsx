import * as React from 'react';
import * as Mui from '@material-ui/core';
import { bind } from 'decko';

class About extends React.Component<{}, {}> {
  @bind
  public render(): React.ReactNode {
    return (
      <Mui.Typography variant='h5'>
        This site was created by Shane DeSeranno, Donald Gill, Daniel Ramey, and Lara Ramey to aid in scoring various games.
      </Mui.Typography>
    );
  }
}

export default About;
