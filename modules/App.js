import React, { Component } from 'react';
import { Router } from 'rect-router';
import { Link } from 'react-router';

class App extends Component {
  static propTypes = {
    routes: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  }

  get content() {
    return (<Router
      routes={this.props.routes}
      history={this.props.history} />)
  }

  render() {
    return (
      <div>
        {this.content}
      </div>
    );
  }
}

export default App
