import { createGlobalStyle } from "styled-components"

export const PrimaryBackgroundColor = "#41464e";
export const SecondaryBackgroundColor = "#282c34";
export const InverseBackgroundColor = "#EEE9E1";

export const PrimaryColor = "white";
export const InverseColor = "black";

export const LinkColor = "#61dafb";
export const LinkHoverColor = "#acf1ff";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${ PrimaryBackgroundColor };
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
    color: ${ LinkColor };
  }

  a:hover {
    color: ${ LinkHoverColor };
  }
`;
