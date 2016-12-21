import React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';

class App extends Component {
  render() {
    return (
      <div>
        <h2>Linha do Tempo</h2>
        <Link to='/posts'>posts</Link>
        { this.props.children }
      </div>
    );
  }
}

export default App
