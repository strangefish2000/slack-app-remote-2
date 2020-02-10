import React from "react";
import "./channel.css";

const Channel = ({ channel, onActiveClick, activeChannelId }) => {
  return (
    <button
      className={
        activeChannelId === channel.id
          ? "channel-button-active"
          : "channel-button"
      }
      channel={channel}
      onClick={onActiveClick}
      isActive={activeChannelId === channel.id}
    >
      # {channel.name}
    </button>
  );
};

export default Channel;

//.................
