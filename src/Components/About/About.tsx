import * as React from 'react';
import * as Mui from '@material-ui/core';

class About extends React.Component<{}, {}> {
  public render(): JSX.Element {
    return (
      <Mui.Box m={2}>
        <Mui.Typography>
          This site was created by Shane DeSeranno, Donald Gill, and Lara Ramey to aid in scoring games.
        </Mui.Typography>
      </Mui.Box>
    );
  }
}

export default About;
