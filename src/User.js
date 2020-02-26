import React from "react";
import "./user.css";
import { PropTypes } from "prop-types";

const User = ({ user, onActiveUserClick, activeUserId }) => {
  return (
    <button
      className={
        activeUserId === user.id ? "user-button-active" : "user-button"
      }
      user={user}
      onClick={onActiveUserClick}
    >
      # {user.name}
    </button>
  );
};

User.propTypes = {
  onActiveUserClick: PropTypes.func,
  activeUserId: PropTypes.number,
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string
  })
};

export default User;
