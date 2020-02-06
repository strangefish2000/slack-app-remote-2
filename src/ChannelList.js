import React from "react";
import "./channel-list.css";
import Channel from "./Channel.js";

const ChannelList = ({ channels }) => (
  <div className="channel-list">
    <span>
      {channels.map(channel => (
        <Channel key={channel.name} channel={channel} />
      ))}
    </span>
  </div>
);

export default ChannelList;
