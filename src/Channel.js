import React from "react";
import "./channel.css";

const Channel = ({ channel }) => {
  return (
    <button className="channel-button" channel={channel}>
      # {channel.name}
    </button>
  );
};

export default Channel;
