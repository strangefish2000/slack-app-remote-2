import React from "react";
import "./input-panel.css";
import { PropTypes } from "prop-types";

class InputPanel extends React.Component {
  static propTypes = {
    onSendMessage: PropTypes.func.isRequired
  };
  state = { text: "" };

  setText(text) {
    this.setState({ text });
  }

  handleKeyPress = event => {
    if (!this.state.text) {
      return;
    }

    if (event.key === "Enter") {
      this.props.onSendMessage(this.state.text);
      this.setText("");
    }
  };

  handleChange = event => {
    this.setText(event.target.value);
  };

  render() {
    return (
      <div className="input">
        <input
          placeholder="Type your message here"
          className="input-field"
          type="text"
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
          value={this.state.text}
        />
      </div>
    );
  }
}

export default InputPanel;
