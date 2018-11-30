import * as React from "react";

import { DarkTheme, LightTheme, ThemeProvider } from "../../Theme";
import { Page, GlobalStyle } from "./Styles";

import Header from "../Header/Header";
import Main from "../Main/Main";

class App extends React.Component {
  public render(): React.ReactNode {
    return (
      <ThemeProvider theme={DarkTheme}>
        <Page>
          <GlobalStyle />
          <Header />
          <Main />
        </Page>
      </ThemeProvider>
    );
  }
}

export default App;
