import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';

import TimelineItem from './TimelineItem';

class Timeline extends Component {

  constructor() {
    super();
    this.state = {
      posts: {},
    }
  }

  componentDidMount() {
    const url = `http://104.236.198.234/api/timeline`;
    fetch( url )
      .then(res => {
        console.log(res)
        return res.json()
      })
      .then(res => this.setState({posts: res}))
  }

  render() {
    const {query} = this.props.location;
    const posts = this.state.posts;
    return (
      <div>
        <Link to='/'>voltar</Link>
        <h4>timeline</h4>
        { !posts.results ? null : 
          posts.results.map( post => (
            <TimelineItem
              key={post._id}
              post={post}
            />
        )) }
      </div>
    );
  }
}

export default Timeline


