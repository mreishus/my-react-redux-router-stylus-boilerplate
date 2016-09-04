import React, { Component } from 'react';
import Index from './Index';
import ConnectedLayout from './ConnectedLayout';
import { Router, Route, IndexRoute, Link } from 'react-router';

import { Provider } from 'react-redux';
import store, { history } from '../store';

// If you use React Router, make this component
// render <Router> with your routes. Currently,
// only synchronous routes are hot reloaded, and
// you will see a warning from <Router> on every reload.
// You can ignore this warning. For details, see:
// https://github.com/reactjs/react-router/issues/2182

const About = React.createClass({
  render() {
	return (
	  <div>About</div>
	)
  }
})

const NoMatch = React.createClass({
  render() {
	return (
	  <div>Whoops, 404</div>
	)
  }
})

// custom creation fn to pass down store as props to every component
  /*
var createElement = function (Component, props) {
  return <Component store={store} {...props} />
};
*/

export default class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Route path="/" component={ConnectedLayout}>
          <IndexRoute component={Index} />
          <Route path="about" component={About}/>
          <Route path="*" component={NoMatch}/>
        </Route>
      </Router>
    );
  }
}
