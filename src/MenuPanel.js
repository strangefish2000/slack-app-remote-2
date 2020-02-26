import React from "react";
import UsersPanel from "./UsersPanel.js";
import ChannelPanel from "./ChannelPanel.js";
import "./menu-panel.css";
import { PropTypes } from "prop-types";

const MenuPanel = ({
  activeChannelId,
  channels,
  channelSelectedActive,
  activeUserId,
  users,
  userSelectedActive
}) => {
  return (
    <div className="menu-panel">
      <div className="channels">
        <ChannelPanel
          activeChannelId={activeChannelId}
          channels={channels}
          channelSelectedActive={channelSelectedActive}
        />
      </div>
      <div className="userss">
        <UsersPanel
          activeUserId={activeUserId}
          users={users}
          userSelectedActive={userSelectedActive}
        />
      </div>
    </div>
  );
};

MenuPanel.propTypes = {
  activeChannelId: PropTypes.number,
  channelSelectedActive: PropTypes.func,
  activeUserId: PropTypes.number,
  userSelectedActive: PropTypes.func,
  channels: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string
    }).isRequired
  ),
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string
    }).isRequired
  )
};

export default MenuPanel;
