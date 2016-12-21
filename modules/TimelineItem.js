import React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';

class TimelineItem extends Component {
  render() {
  console.log('timelineitem')
    return (
      <div>{ this.props.params.postId }</div>
    )
  }
}

export default TimelineItem
