import React from 'react';
import { Route } from 'react-router';
import Home from './containers/Home'; 

// Components
import Timeline from './components/Timeline/Timeline';

const routes = () => (
  <Route path='/' component={Home}>
    <Route path='/posts' component={Timeline} />
  </Route>
)

export default routes;

