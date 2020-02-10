import React from "react";
import "./channel-list.css";
import Channel from "./Channel.js";

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

export default ChannelList;

//................
