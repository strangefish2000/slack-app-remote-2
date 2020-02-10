import React from "react";
import "./message.css";

class Message extends React.Component {
  render() {
    const { message } = this.props;
    return (
      <div className="message-container">
        <p className="message-text">A MESSAGE</p>
      </div>
    );
  }
}

export default Message;

//...........
