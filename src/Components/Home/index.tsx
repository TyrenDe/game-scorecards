import * as React from 'react';
import * as Mui from '@material-ui/core';
import Footer from '../Footer';

class Home extends React.Component<{}, {}> {
  public render(): JSX.Element {
    return (
      <React.Fragment>
        <Mui.Typography>
          This is the home page where we provide useful details.
        </Mui.Typography>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
