import React from "react";
import "./input-panel.css";

class InputPanel extends React.Component {
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
      <form className="input">
        <input
          className="input-field"
          type="text"
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
          value={this.state.text}
        />
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
