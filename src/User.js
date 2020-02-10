import React from "react";
import "./user.css";

const User = ({ user, onActiveUserClick, activeUserId }) => {
  return (
    <button
      className={
        activeUserId === user.id ? "user-button-active" : "user-button"
      }
      user={user}
      onClick={onActiveUserClick}
      isActive={activeUserId === user.id}
    >
      # {user.name}
    </button>
  );
};

export default User;

//.................
