import * as React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/split'>Split</Link></li>
            <li><Link to='/about'>About</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
};

export default Header;