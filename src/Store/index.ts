import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import thunk from 'redux-thunk';

import { genericReducer } from './Generic/Reducers';
import { milleBornesReducer } from './MilleBornes/Reducers';
import { splitReducer } from './Split/Reducers';
import { systemReducer } from './System/Reducers';

const rootReducer = combineReducers({
  generic: genericReducer,
  milleBornes: milleBornesReducer,
  split: splitReducer,
  system: systemReducer,
});

const bindMiddleware = (middleware: any) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

export type AppState = ReturnType<typeof rootReducer>;

const store: Store<AppState> = createStore(rootReducer, bindMiddleware([thunk]));
export default store;
