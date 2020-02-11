import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  state = {
    messages: []
  };

  componentDidMount() {
    this.setState({
      messages: fakeMessages
    });
  }

  render() {
    let { messages } = this.state;
    return (
      <div className="message-list">
        <span>
          {messages.map(message => (
            <Message key={message.id} message={message} />
          ))}
        </span>
      </div>
    );
  }
}

const Message = ({ message }) => (
  <div className="message">
    <div className="content">
      {message.messageText}
      <div className="buttons"></div>
    </div>
  </div>
);

const fakeMessages = [
  {
    name: "Sarah",
    date: "DATE",
    id: "lhiug98786",
    messageText: "Hello, this is a message from Sarah"
  },
  {
    name: "Dave",
    date: "DATE",
    id: "vjkefl7erw896",
    messageText: "Hello, this is a message from Dave"
  },
  {
    name: "Sarah",
    date: "DATE",
    id: "dsc888",
    messageText: "Hello, this is a message from Sarah"
  },
  {
    name: "Zack",
    date: "DATE",
    id: "a8798uihj",
    messageText: "Hello, this is a message from Zack"
  },
  {
    name: "Pam",
    date: "DATE",
    id: "bswlioje888",
    messageText: "Hello, this is a message from Pam"
  },
  {
    name: "Erin",
    date: "DATE",
    id: "s790854hfbr",
    messageText: "Hello, this is a message from Erin"
  }
];

ReactDOM.render(<App />, document.querySelector("#root"));
