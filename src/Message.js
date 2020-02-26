import React from "react";
import "./message.css";

const Message = ({ message }) => (
  <div className="message-container">
    <span className="avatar" />
    <span className="user-name">{message.userName}</span>
    <span className="timestamp">{message.timestamp.toString()}</span>
    <p className="message-text">{message.text}</p>
  </div>
);

export default Message;
