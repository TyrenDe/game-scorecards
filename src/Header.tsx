import * as React from "react";
import { Link } from "react-router-dom";

import styled from "./Theme";

const StyledHeader = styled.div`
  background-color: ${ props => props.theme.SecondaryBackgroundColor };
  color: ${ props => props.theme.PrimaryColor };

  padding: 10px 0 10px 0;

  nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  nav ul li {
    display: inline;
    padding: 10px;
  }
`;

class Header extends React.Component {
  public render(): React.ReactNode {
    return (
      <StyledHeader>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/split'>Split</Link></li>
            <li><Link to='/millebornes'>Mille Bornes</Link></li>
            <li><Link to='/about'>About</Link></li>
          </ul>
        </nav>
      </StyledHeader>
    );
  }
}

export default Header;