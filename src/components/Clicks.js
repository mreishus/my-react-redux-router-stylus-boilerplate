import React, { Component } from 'react';

export default class Clicks extends Component {
  increment() {
    this.props.incrementClicks();
  }
  render() {
    return (
      <div>
        Clicks component.  Clicks =  {this.props.clicks}
        <button onClick={() => this.increment()}>Add Click</button>
      </div>
    );
  }
}
