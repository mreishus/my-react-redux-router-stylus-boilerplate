import React, { Component } from 'react';
import Layout from './Layout';
import Counter from './Counter';
import Clicks from './Clicks';

export default class Index extends Component {
  render() {
    return (
      <div>
        <Counter />
        <Clicks {...this.props} />
      </div>
    );
  }
}
