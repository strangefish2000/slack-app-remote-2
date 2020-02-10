import React from "react";
import "./Slack.css";
import ChannelPanel from "./ChannelPanel.js";
import UserPanel from "./UserPanel.js";

class Slack extends React.Component {
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

    users: [
      {
        name: "Dave",
        id: "cfsiofh546"
      },
      {
        name: "Sarah",
        id: "bdfk4325gver"
      },
      {
        name: "Zack",
        id: "kvgai546232uf"
      },
      {
        name: "Pam",
        id: "hlkfdsyw5hae"
      },
      {
        name: "Erin",
        id: "pgdfcggsdhkyu"
      },
      {
        name: "Joe",
        id: "jkf654dgb"
      }
    ],
    activeChannelId: null,
    activeUserId: null
  };

  handleActiveChannel = channelId => {
    this.setState({
      activeChannelId: channelId
    });
  };

  handleActiveUser = userId => {
    this.setState({
      activeUserId: userId
    });
  };

  render() {
    const { channels, activeChannelId, users, activeUserId } = this.state;
    return (
      <div className="slack-container">
        <div className="menu-panel">
          <div className="channels">
            <ChannelPanel
              activeChannelId={activeChannelId}
              channels={channels}
              channelSelectedActive={this.handleActiveChannel}
            />
          </div>
          <div className="users">
            <UserPanel
              activeUserId={activeUserId}
              users={users}
              userSelectedActive={this.handleActiveUser}
            />
          </div>
        </div>
        <div className="list-panel">List Panel</div>
      </div>
    );
  }
}

export default Slack;

//............................
