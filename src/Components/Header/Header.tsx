import * as React from "react";
import { Link } from "react-router-dom";

import { StyledHeader } from "./Styles";

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
