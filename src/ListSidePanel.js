import React from "react";
import InputPanel from "./InputPanel.js";
import Messages from "./Messages.js";
import "./list-side-panel.css";

class ListSidePanel extends React.Component {
  render() {
    const { messages, onSendMessagee } = this.props;
    return (
      <div className="list-side-panel">
        <div className="list-panel">
          <div classname="list-container">
            <Messages messages={messages} />
          </div>
        </div>

        <div className="input-panel">
          <InputPanel onSendMessagee={onSendMessagee} />
        </div>
      </div>
    );
  }
}

export default ListSidePanel;
