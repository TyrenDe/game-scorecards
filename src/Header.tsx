import * as React from "react";
import { Link } from "react-router-dom";

import styled from "./Theme";

const StyledHeader = styled.div`
  background-color: ${ props => props.theme.SecondaryBackgroundColor };
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 1vmin);
  color: ${ props => props.theme.PrimaryColor };
`;

class Header extends React.Component {
  render() {
    return (
      <StyledHeader>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/split'>Split</Link></li>
            <li><Link to='/about'>About</Link></li>
          </ul>
        </nav>
      </StyledHeader>
    );
  }
}

export default Header;