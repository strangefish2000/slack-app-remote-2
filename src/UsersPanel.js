import React from "react";
import "./user-panel.css";
import UsersList from "./UsersList.js";
import { PropTypes } from "prop-types";

const UsersPanel = ({ users, userSelectedActive, activeUserId }) => (
  <div className="user-panel">
    <h5 className="title">PEOPLE</h5>
    <UsersList
      users={users}
      activeUserId={activeUserId}
      userSelectedActive={userSelectedActive}
    />
  </div>
);

UsersPanel.propTypes = {
  userSelectedActive: PropTypes.func,
  activeUserId: PropTypes.number,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string
    })
  )
};

export default UsersPanel;

//...............
