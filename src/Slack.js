import React from "react";
import "./Slack.css";
import ChannelPanel from "./ChannelPanel.js";
import UsersPanel from "./UsersPanel.js";
import InputPanel from "./InputPanel.js";
import Messages from "./Messages.js";
import { channels, users, createFakeActivity } from "./static-data.js";

class Slack extends React.Component {
  state = {
    channels,
    users,
    messagesByChannelId: createFakeActivity(channels, 15),
    messagesByPersonId: createFakeActivity(users, 5),
    activeChannelId: null,
    activeusersId: null
  };

  handleActiveChannel = channelId => {
    this.setState({
      activeusersId: null,
      activeChannelId: channelId
    });
  };

  handleActiveusers = usersId => {
    this.setState({
      activeChannelId: null,
      activeusersId: usersId
    });
  };

  render() {
    const { channels, activeChannelId, users, activeusersId } = this.state;
    let messages = [];

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
          <div className="userss">
            <UsersPanel
              activeusersId={activeusersId}
              users={users}
              usersSelectedActive={this.handleActiveusers}
            />
          </div>
        </div>
        <div className="list-side-panel">
          <div className="list-panel">
            <div classname="list-container">
              <Messages messages={messages} />
            </div>
          </div>

          <div className="input-panel">
            {activeChannelId || activeusersId !== null ? <InputPanel /> : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Slack;
