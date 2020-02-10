import React from "react";
import "./user-panel.css";
import UserList from "./UserList.js";

const UserPanel = ({ users, userSelectedActive, activeUserId }) => (
  <div className="user-panel">
    <h1 className="title">PEOPLE</h1>
    <UserList
      users={users}
      activeUserId={activeUserId}
      userSelectedActive={userSelectedActive}
    />
  </div>
);

export default UserPanel;

//...............
