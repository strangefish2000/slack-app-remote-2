import React from "react";
import "./channel.css";

const Channel = ({ channel, onActiveClick }) => {
  return (
    <button
      className="channel-button"
      channel={channel}
      onClick={onActiveClick}
    >
      # {channel.name}
    </button>
  );
};

export default Channel;
