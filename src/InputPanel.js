import React from "react";
import "./input-panel.css";

class InputPanel extends React.Component {
  render() {
    const { onMessageChange } = this.props;
    return (
      <form className="input">
        <input className="input-field" type="text" onChange={onMessageChange} />
      </form>
    );
  }
}

export default InputPanel;

/*
 import React from "react";
import "./input-panel.css";

class InputPanel extends React.Component {
  render() {
    const { onMessageChange } = this.props;
    return (
      <form className="input">
        <input className="input-field" type="text" onChange={onMessageChange} />
      </form>
    );
  }
}

export default InputPanel;
*/
