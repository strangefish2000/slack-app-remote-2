import React from "react";
import "./channel.css";
import { PropTypes } from "prop-types";

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
    >
      # {channel.name}
    </button>
  );
};

Channel.propTypes = {
  onActiveClick: PropTypes.func.isRequired,
  activeChannelId: PropTypes.number,
  channel: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string
  }).isRequired
};

export default Channel;
