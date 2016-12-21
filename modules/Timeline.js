import React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';

class Timeline extends Component {
  render() {
    return (
      <div>
        <h4>timeline</h4>
        <Link to='/posts/1'>1</Link>
        { this.props.children }
      </div>
    );
  }
}

export default Timeline


