import * as React from "react";
import * as ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

import App from "./Components/App/App";

ReactDOM.render((
  <HashRouter>
    <App />
  </HashRouter>
), document.getElementById('root'));
