import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import App from 'Components/App';
import storeData from 'Store';

ReactDOM.render((
  <HashRouter>
    <Provider store={storeData.store}>
      <PersistGate loading={null} persistor={storeData.persistor}>
        <App />
      </PersistGate>
    </Provider>
  </HashRouter>
), document.getElementById('root'));
