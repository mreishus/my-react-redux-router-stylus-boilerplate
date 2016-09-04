import React, { Component } from 'react';
import Index from './Index';
import Layout from './Layout';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';

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

export default class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Layout}>
          <IndexRoute component={Index} />
          <Route path="about" component={About}/>
          <Route path="*" component={NoMatch}/>
        </Route>
      </Router>
    );
  }
}
