import React from "react";
import "./input-panel.css";

const InputPanel = ({ onMessageChange }) => {
  return (
    <form className="input">
      <input className="input-field" type="text" onChange={onMessageChange} />
    </form>
  );
};

export default InputPanel;

// value={this.State.value}
//         onChange={this.handleChange}
