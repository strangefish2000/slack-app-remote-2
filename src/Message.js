import React from "react";

class Message extends React.Component {
  render() {
    const { message } = this.props;
    return (
      <div className="message-container">
        <p className="message-text">{message.messageText}</p>
      </div>
    );
  }
}

export default Message;
