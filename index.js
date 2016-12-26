import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Redirect, browserHistory } from 'react-router';

// Components
import App from './modules/App';

render(
  <App history={browserHistory} />,
  document.getElementById('root')
)

// render((
//   <Router history={browserHistory}>
//     <Route path='/' component={App}>
//       <Route path='/posts' component={Timeline}>
//       </Route>
//     </Route>
//   </Router>
// ), document.getElementById('root'));

