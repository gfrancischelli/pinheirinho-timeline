import React from 'react';
import { Link } from 'react-router';

const Home = (props) => (
  <div>
    <div>Home</div>
    <Link to='/posts'>Posts</Link>
    {props.children}
  </div>
)

export default Home;

