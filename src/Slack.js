import React from "react";
import "./Slack.css";
import ChannelPanel from "./ChannelPanel.js";
import UserPanel from "./UserPanel.js";
import InputPanel from "./InputPanel.js";
import Messages from "./Messages.js";

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
    activeUserId: null,
    messages: []
  };

  componentDidMount() {
    this.setState({
      messages: fakeMessages
    });
  }

  handleActiveChannel = channelId => {
    this.setState({
      activeUserId: null,
      activeChannelId: channelId
    });
  };

  handleActiveUser = userId => {
    this.setState({
      activeChannelId: null,
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
        <div className="list-side-panel">
          <div className="list-panel">
            <div classname="list-container">
              <Messages messages={this.state.messages} />
            </div>
          </div>

          <div className="input-panel">
            {activeChannelId || activeUserId !== null ? <InputPanel /> : null}
          </div>
        </div>
      </div>
    );
  }
}

const fakeMessages = [
  {
    name: "Sarah",
    date: "DATE",
    id: "lhiug98786",
    messageText: "Hello, this is a message from Sarah"
  },
  {
    name: "Dave",
    date: "DATE",
    id: "vjkefl7erw896",
    messageText: "Hello, this is a message from Dave"
  },
  {
    name: "Sarah",
    date: "DATE",
    id: "dsc888",
    messageText: "Hello, this is a message from Sarah"
  },
  {
    name: "Zack",
    date: "DATE",
    id: "a8798uihj",
    messageText: "Hello, this is a message from Zack"
  },
  {
    name: "Pam",
    date: "DATE",
    id: "bswlioje888",
    messageText: "Hello, this is a message from Pam"
  },
  {
    name: "Erin",
    date: "DATE",
    id: "s790854hfbr",
    messageText: "Hello, this is a message from Erin"
  }
];

export default Slack;

//............................
// PROPTYPES!

//Add an item
// const addToCart = item => {
//   setCart(prevCart => [...prevCart, item]);
// };
