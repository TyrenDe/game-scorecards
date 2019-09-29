import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import { Persistor, persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { genericReducer } from './Generic/Reducers';
import { milleBornesReducer } from './MilleBornes/Reducers';
import { muReducer } from './Mu/Reducers';
import { splitReducer } from './Split/Reducers';
import { systemReducer } from './System/Reducers';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  generic: genericReducer,
  milleBornes: milleBornesReducer,
  mu: muReducer,
  split: splitReducer,
  system: systemReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const bindMiddleware = (middleware: any) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

export type AppState = ReturnType<typeof rootReducer>;

interface IStoreData {
  store: Store<AppState>;
  persistor: Persistor;
}

const store = createStore(persistedReducer, bindMiddleware([thunk]));

const data: IStoreData = {
  store,
  persistor: persistStore(store),
};

export default data;
