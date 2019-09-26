import * as React from 'react';
import * as Mui from '@material-ui/core';

class Home extends React.Component<{}, {}> {
  public render(): JSX.Element {
    return (
      <Mui.Box m={2}>
        <Mui.Typography>
          This is the home page where we provide useful details.
        </Mui.Typography>
      </Mui.Box>
    );
  }
}

export default Home;
