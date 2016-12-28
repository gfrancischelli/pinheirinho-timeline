import React from 'react';
import { Component, PropTypes } from 'react';
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
    const { content, data } = this.props.post;
    const date = new Date(data);
    return (
      <div
        style={ {cursor: 'pointer'} }
        onClick={ this.handleClick }>
        <span>
          <h6>{ `${date.getMonth().toLocaleString('pt-BR')}/${date.getFullYear()}` }</h6>
        </span>
        <h5>{ title }</h5>
        { this.state.open == 0 ? null:
        <div
          className='timeline-item__content'
          dangerouslySetInnerHTML={{__html:content}}>
        </div>
        }
      </div>
    )
  }
}

TimelineItem.propTypes = {
  post: PropTypes.object.isRequired,
}

export default TimelineItem
