import React from "react";
import "./messages.css";
import Message from "./Message.js";

class Messages extends React.Component {
  render() {
    const { messages } = this.props;
    return (
      <ul className="messages">
        {messages.map(message => (
          <li key={message.id}>
            <Message message={message} />
          </li>
        ))}
      </ul>
    );
  }
}

export default Messages;
