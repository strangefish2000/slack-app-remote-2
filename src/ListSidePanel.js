import React from "react";
import InputPanel from "./InputPanel.js";
import Messages from "./Messages.js";
import EmptyMessages from "./EmptyMessages.js";
import "./list-side-panel.css";
import { PropTypes } from "prop-types";

class ListSidePanel extends React.Component {
  static propTypes = {
    onSendMessage: PropTypes.func.isRequired,
    messages: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        userName: PropTypes.string,
        timestamp: PropTypes.object,
        text: PropTypes.string
      }).isRequired
    )
  };
  render() {
    const { messages, onSendMessage } = this.props;
    return (
      <div className="list-side-panel">
        {messages.length > 0 ? (
          <Messages
            messages={messages}
            ref={cmp => {
              this.messages = cmp;
            }}
          />
        ) : (
          <EmptyMessages />
        )}

        <div className="input-panel">
          <InputPanel onSendMessage={onSendMessage} />
        </div>
      </div>
    );
  }
}

export default ListSidePanel;
