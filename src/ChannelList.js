import React from "react";
import "./channel-list.css";

const ChannelList = ({ channels }) => (
  <div className="channel-list">
    <span>
      {channels.map(channel => (
        <Channel key={channel.name} channel={channel} />
      ))}
    </span>
  </div>
);

const Channel = ({ channel }) => {
  return <div className="channel">{channel.name}</div>;
};

export default ChannelList;
