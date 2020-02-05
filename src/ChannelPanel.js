import React from "react";
import "./channel-panel.css";
import Channel from "./Channel.js";

class ChannelPanel extends React.Component {
  render() {
    return (
      <div className="channel-panel">
        <h1 className="title">CHANNELS</h1>
        <ChannelList />
      </div>
    );
  }
}

export default ChannelPanel;
