import * as React from "react";

import styled from "./Theme";
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
  }

  nav ul li {
  }

  a, a:visited {
    color: ${ props => props.theme.LinkColor };
  }

  a:hover {
    color: ${ props => props.theme.LinkHoverColor };
  }
`;

const Page = styled.div`
  display: flex;
  flex-direction: column;
`;

class App extends React.Component {
  render() {
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
