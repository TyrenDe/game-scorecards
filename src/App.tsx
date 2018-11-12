import * as React from "react";

import { createGlobalStyle, ThemeProvider } from "styled-components";
import { DarkTheme, IStorecardThemeProps } from "./Theme";
import Header from "./Header";
import Main from "./Main";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${ (props: IStorecardThemeProps) => props.theme!.PrimaryBackgroundColor };
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
    color: ${ (props: IStorecardThemeProps) => props.theme!.LinkColor };
  }

  a:hover {
    color: ${ (props: IStorecardThemeProps) => props.theme!.LinkHoverColor };
  }
`;

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={DarkTheme}>
        <div>
          <GlobalStyle />
          <Header />
          <Main />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
