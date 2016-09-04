import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './reducers/index';

const defaultState = {
  clicks: 0
};

//const store = createStore( rootReducer, defaultState );
const store = createStore( rootReducer, defaultState, window.devToolsExtension && window.devToolsExtension() );

export const history = syncHistoryWithStore(browserHistory, store);

if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default;
    console.log(nextRootReducer);
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
