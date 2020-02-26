import React from "react";
import "./channel-panel.css";
import ChannelList from "./ChannelList.js";
import { PropTypes } from "prop-types";

const ChannelPanel = ({ channels, channelSelectedActive, activeChannelId }) => (
  <div className="channel-panel">
    <h5 className="title">CHANNELS</h5>
    <ChannelList
      channels={channels}
      activeChannelId={activeChannelId}
      channelSelectedActive={channelSelectedActive}
    />
  </div>
);

ChannelPanel.propTypes = {
  channelSelectedActive: PropTypes.func.isRequired,
  activeChannelId: PropTypes.number,
  channels: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string
    }).isRequired
  )
};

export default ChannelPanel;
