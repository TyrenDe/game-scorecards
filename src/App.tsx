import * as React from "react";

import { createGlobalStyle, DarkTheme, LightTheme, ThemeProvider } from "./Theme";
import Header from "./Header";
import Main from "./Main";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${ props => props.theme.PrimaryBackgroundColor };
  }

  nav ul {
    list-style: none;
    overflow: hidden;
    position: relative;
  }

  nav ul li {
    float: left;
    margin: 0 20px 0 0;
  }

  a, a:visited {
    color: ${ props => props.theme.LinkColor };
  }

  a:hover {
    color: ${ props => props.theme.LinkHoverColor };
  }
`;

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={DarkTheme}>
        <React.Fragment>
          <GlobalStyle />
          <Header />
          <Main />
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default App;
