import React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';

class TimelineItem extends Component {
  handleClick() {
    console.log('click')
    if (this.state.open == 0) {
      this.setState({open: 1});
    } else {
      this.setState({open: 0});
    }
    console.log(this.state.open)
  }

  constructor() {
    super();
    this.state = {open: 0};
    this.handleClick = this.handleClick.bind(this);
  }


  render() {
  console.log('timelineitem')
    const title = this.props.post['título'];
    const { content } = this.props.post;
    return (
      <div>
        <h5
          onClick={ this.handleClick }
          style={ {cursor: 'pointer'} }>
          { title }
        </h5>
        { this.state.open == 0 ? null:
          <div dangerouslySetInnerHTML={{__html:content}}></div>
        }
      </div>
    )
  }
}

export default TimelineItem
