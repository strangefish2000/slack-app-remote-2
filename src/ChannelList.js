import React from "react";
import "./channel-list.css";
import Channel from "./Channel.js";

const ChannelList = ({ channels, channelSelectedActive }) => (
  <div className="channel-list">
    <span>
      {channels.map(channel => (
        <Channel
          key={channel.id}
          channel={channel}
          onActiveClick={() => channelSelectedActive(channel.id)}
        />
      ))}
    </span>
  </div>
);

export default ChannelList;
