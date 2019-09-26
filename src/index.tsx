import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './Store';
import App from './Components/App';

ReactDOM.render((
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>
), document.getElementById('root'));
