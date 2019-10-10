import * as React from 'react';
import * as Mui from '@material-ui/core';

class About extends React.Component<{}, {}> {
  public render(): JSX.Element {
    return (
      <Mui.Typography variant='h5'>
        This site was created by Shane DeSeranno, Donald Gill, Daniel Ramey, and Lara Ramey to aid in scoring various games.
      </Mui.Typography>
    );
  }
}

export default About;
