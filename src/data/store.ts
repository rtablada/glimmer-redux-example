import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState = {  };

export default () => {
  const store = createStore(
    reducer,
    initialState,
    composeEnhancers(
      applyMiddleware(thunk)
    )
  );

  return store;
}
