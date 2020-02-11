import React from "react";
import "./messages.css";
// import Message from "Message.js";

// class Messages extends React.Component {
//   render() {
//     const { messages } = this.state;
//     return (
//       <ul className="messages">
//         {messages.map(message => (
//           <li key={message.id}>
//             <Message message={message} />
//           </li>
//         ))}
//       </ul>
//     );
//   }
// }

class Messages extends React.Component {
  render() {
    return (
      <ul className="messages">
        <li>MESSAGE 1</li>
      </ul>
    );
  }
}

export default Messages;
