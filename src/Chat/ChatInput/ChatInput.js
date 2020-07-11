import React, { Component } from 'react';
import './ChatInput.scss';

class ChatInput extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      inputText: '',
    };
    this.onChangeEvent = this.onChangeEvent.bind(this);
    this.onSubmitEvent = this.onSubmitEvent.bind(this);
  }

  onChangeEvent(event) {
    this.setState({
      inputText: event.target.value,
    });
  }

  onSubmitEvent() {
    const { onSend } = this.props;
    onSend(this.state.inputText);
    this.setState({
      inputText: '',
    });
  }

  render() {
    return (
      <footer className="ChatInput">
        <input type="text" onChange={this.onChangeEvent} value={this.state.inputText} />
        <button type="button" onClick={this.onSubmitEvent}>
          Send
        </button>
      </footer>
    );
  }
}

export default ChatInput;
