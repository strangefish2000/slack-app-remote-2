import React from "react";
import "./user-list.css";
import User from "./User.js";

const UserList = ({ users, userSelectedActive, activeUserId }) => (
  <div className="user-list">
    <span>
      {users.map(user => (
        <User
          key={user.id}
          user={user}
          activeUserId={activeUserId}
          onActiveUserClick={() => userSelectedActive(user.id)}
        />
      ))}
    </span>
  </div>
);

export default UserList;
