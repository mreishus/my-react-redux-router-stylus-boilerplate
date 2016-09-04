import React from 'react';
import { Link } from 'react-router';

const Layout = React.createClass({
  render() {
    return(
      <div>
        <h1>Hello, world!</h1>
        <h2>
          <Link to={'/'}>Main</Link>
          <Link to={'/about'}>About</Link>
        </h2>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }

});

export default Layout;
