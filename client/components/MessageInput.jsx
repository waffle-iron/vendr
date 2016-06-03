import React, { Component, PropTypes } from 'react';

export default class MessageInput extends Component { 

  inputField(text) {
    this.setState({
      input: text
    });
  }
  render() {
    return (
      <div className='message-input'>
        <input className='message-input-box' style={{ width: '220px'}} onChange={e => this.inputField(e.target.value)} type='text' name="messages" />
        <button className='message-input-submit' onClick={event => this.props.submit(this.state.input)}>Post</button>
      </div>
    );
  }
}
