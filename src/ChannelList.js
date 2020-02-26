import React from "react";
import "./channel-list.css";
import Channel from "./Channel.js";
import { PropTypes } from "prop-types";

const ChannelList = ({ channels, channelSelectedActive, activeChannelId }) => (
  <div className="channel-list">
    <span>
      {channels.map(channel => (
        <Channel
          key={channel.id}
          channel={channel}
          activeChannelId={activeChannelId}
          onActiveClick={() => channelSelectedActive(channel.id)}
        />
      ))}
    </span>
  </div>
);

ChannelList.propTypes = {
  channelSelectedActive: PropTypes.func.isRequired,
  activeChannelId: PropTypes.number,
  channels: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string
    }).isRequired
  )
};

export default ChannelList;
