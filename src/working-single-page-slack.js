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
  }; //* 3. TO THIS!

  render() {
    const { channels, selectedChannelId } = this.state;

    return (
      <div className="slack-container">
        <div className="menu-panel">
          <div className="channels">
            <Channels
              channels={channels}
              selectedId={selectedChannelId}
              onChannelSelected={this.handleChannelSelected} //* 2. VIA THIS
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
          onClick={() => onChannelSelected(channel.id)} //*  2. ONCLICK RECEIVED. f-returns: var onChannelSelected = channel,id (which is the current channel)
        />
      ))}
    </span>
  </div>
);

const Channel = ({ channel, onClick }) => {
  return (
    <button className="channel-button" channel={channel} onClick={onClick}>
      {" "}
      //* 1. ONCLICK CALLS UP # {channel.name}
    </button>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
