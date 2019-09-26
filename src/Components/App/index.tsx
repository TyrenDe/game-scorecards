import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { AppState } from '../../Store';
import { Themes } from '../../Theme';
import * as system from '../../Store/System';
import Footer from '../Footer';
import Header from '../Header';
import Main from '../Main';

interface IAppProps {
  selectedTheme: system.ThemeOptions;
}

class App extends React.Component<IAppProps, {}> {
  public render(): JSX.Element {
    const currentTheme = Themes.getTheme(this.props.selectedTheme);

    return (
      <ThemeProvider theme={currentTheme}>
        <CssBaseline />
        <Header />
        <Main />
        <Footer />
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (state: AppState): IAppProps => ({
  selectedTheme: state.system.selectedTheme,
});

const mapDispatchToProps = (dispatch: Dispatch): {} => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
