import React from "react";
import "./channel-panel.css";
import ChannelList from "./ChannelList.js";

const ChannelPanel = ({ channels, channelSelectedActive }) => (
  <div className="channel-panel">
    <h1 className="title">CHANNELS</h1>
    <ChannelList
      channels={channels}
      channelSelectedActive={channelSelectedActive}
    />
  </div>
);

export default ChannelPanel;
