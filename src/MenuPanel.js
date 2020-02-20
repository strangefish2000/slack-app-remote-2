import React from "react";
import ChannelPanel from "./ChannelPanel.js";
import UsersPanel from "./UsersPanel.js";
import "./menu-panel.css";

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

export default MenuPanel;
