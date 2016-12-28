import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Redirect, browserHistory } from 'react-router';

import routes from './src/routes';

// Components
import App from './src/App';

render((
  <App history={browserHistory}
       routes={routes} />
), document.getElementById('root'));

