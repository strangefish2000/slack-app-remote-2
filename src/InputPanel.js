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

// const InputPanel = ({ onMessageChange, channels }) => {
//   return (
//     <form className="input">
//       <input
//         className="input-field"
//         type="text"
//         onChange={onMessageChange}
//         channels={channels}
//       />
//     </form>
//   );
// };
