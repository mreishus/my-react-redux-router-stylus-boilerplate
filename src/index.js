import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import css from './styles/main.styl';

import { Provider } from 'react-redux';
import store, { history } from './store';

const rootEl = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <AppContainer>
      <App />
    </AppContainer>
  </Provider>
  ,
  rootEl
);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextApp = require('./components/App').default;
    ReactDOM.render(
      <Provider store={store}>
      <AppContainer>
         <NextApp />
      </AppContainer>
      </Provider>
      ,
      rootEl
    );
  });
}
