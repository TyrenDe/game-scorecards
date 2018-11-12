import * as React from "react";

import { GlobalStyle } from "./Theme";
import Header from "./Header";
import Main from "./Main";

class App extends React.Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
