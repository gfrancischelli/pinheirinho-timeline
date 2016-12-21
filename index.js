import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Redirect, browserHistory } from 'react-router';

// Components
import App from './modules/App';
import Timeline from './modules/Timeline';
import TimelineItem from './modules/TimelineItem';

render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <Route path='/posts' component={Timeline}>
      </Route>
    </Route>
  </Router>
), document.getElementById('root'));

