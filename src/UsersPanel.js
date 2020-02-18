import React from "react";
import "./user-panel.css";
import UsersList from "./UsersList.js";

const UsersPanel = ({ users, userSelectedActive, activeUserId }) => (
  <div className="user-panel">
    <h1 className="title">PEOPLE</h1>
    <UsersList
      users={users}
      activeUserId={activeUserId}
      userSelectedActive={userSelectedActive}
    />
  </div>
);

export default UsersPanel;

//...............
