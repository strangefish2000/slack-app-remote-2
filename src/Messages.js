import React from "react";
import "./messages.css";
// import Message from "Message.js";

const Messages = ({ messages }) => <ul className="messages"></ul>;

export default Messages;

//..........
// {messages.map(message => (

// ))}

//   <li key={message.id}>
//     <Message message={message} />
//   </li>

//..........

// import React from "react";
// import "./messages.css";
// import Message from "Message.js";

// class Messages extends React.Component {
//   render() {
//     const { message } = this.props;
//     return (
//       <ul className="messages">
//         {messages.map(message => (
//           <li key={message.id}>
//             <Message message={message}> MY MESSAGE </Message>
//           </li>
//         ))}
//       </ul>
//     );
//   }
// }

// export default Messages;
