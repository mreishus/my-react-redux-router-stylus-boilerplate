import React from 'react';
import { Link } from 'react-router';

export default function Layout({ children }) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>
        <Link to={'/'}>Main</Link>
        <Link to={'/about'}>About</Link>
      </h2>
      {children}
    </div>
  )
}
