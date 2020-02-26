import React from "react";
import "./user-list.css";
import User from "./User.js";
import { PropTypes } from "prop-types";

const UsersList = ({ users, userSelectedActive, activeUserId }) => (
  <div className="user-list">
    <div>
      {users.map(user => (
        <User
          key={user.id}
          user={user}
          activeUserId={activeUserId}
          onActiveUserClick={() => userSelectedActive(user.id)}
        />
      ))}
    </div>
  </div>
);

UsersList.propTypes = {
  userSelectedActive: PropTypes.func,
  activeUserId: PropTypes.number,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string
    })
  )
};

export default UsersList;
