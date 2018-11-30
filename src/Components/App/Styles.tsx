import styled from "../../Theme";
import { createGlobalStyle } from "../../Theme";

export const GlobalStyle = createGlobalStyle`
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

export const Page = styled.div`
  display: flex;
  flex-direction: column;
`;
