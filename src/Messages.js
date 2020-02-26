import React from "react";
import "./messages.css";
import Message from "./Message.js";
import ReactDOM from "react-dom";
import { PropTypes } from "prop-types";

class Messages extends React.Component {
  static propTypes = {
    messages: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        userName: PropTypes.string,
        timestamp: PropTypes.object,
        text: PropTypes.string
      })
    )
  };

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    var node = ReactDOM.findDOMNode(this);
    node.scrollTop = node.scrollHeight;
  }

  render() {
    const { messages } = this.props;
    return (
      <div className="messages">
        {messages.map(message => (
          <Message key={message.id} message={message} />
        ))}
      </div>
    );
  }
}

export default Messages;
