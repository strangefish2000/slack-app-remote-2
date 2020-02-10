import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  state = {
    channels: [
      {
        name: "general",
        id: "fsiofh"
      },
      {
        name: "help",
        id: "dfkgver"
      },
      {
        name: "react",
        id: "vgaiuf"
      },
      {
        name: "redux",
        id: "lkfdshae"
      },
      {
        name: "webpack",
        id: "gdfcgkyu"
      },
      {
        name: "react-router",
        id: "jkfdgb"
      }
    ],
    selectedChannelId: null
  };

  handleChannelSelected = channelId => {
    this.setState({
      selectedChannelId: channelId
    });
  }; //* 3. TO THIS! ..as in andleChannelSelected()
  //* BECAUSE: onChannelSelected(channel.id) === handleChannelSelected(channel.id)

  render() {
    const { channels, selectedChannelId } = this.state;

    return (
      <div className="slack-container">
        <div className="menu-panel">
          <div className="channels">
            <Channels
              channels={channels}
              selectedId={selectedChannelId}
              onChannelSelected={this.handleChannelSelected} //* 2. NAME CHANGE ONLY
            />
          </div>
        </div>
      </div>
    );
  }
}

const Channels = ({ channels, selectedId, onChannelSelected }) => (
  <div className="channels">
    <span>
      {channels.map(channel => (
        <Channel
          key={channel.id}
          channel={channel}
          isSelected={channel.id === selectedId}
          onClick={() => onChannelSelected(channel.id)} //TODO TRY THIS AS A NON-ARROW FUNCTION
          //* THIS CALLBACK FUNCTION IS SIMPLY A CALL TO handleChannelSelected... as would handleChannelSelected(channel.id)
          //* FORGET THE NAME CHANGE FROM onChannelSelected TO this.handleChannelSelected (LINE 51)
          //* Treat the callback (and all callbacks?) as if they calling directly to the actual function (the rest is just name changes)
        />
      ))}
    </span>
  </div>
);

const Channel = ({ channel, onClick }) => {
  return (
    <button className="channel-button" channel={channel} onClick={onClick}>
      //* 1. ONCLICK CALLS UP to onClick at LINE 68.
    </button>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
