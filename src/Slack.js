import React from "react";
import "./Slack.css";
import MenuPanel from "./MenuPanel.js";
import { PropTypes } from "prop-types";

import { channels, users, createFakeActivity } from "./static-data.js";
import ListSidePanel from "./ListSidePanel";
import EmptyListSidePanel from "./EmptyListSidePanel";

function nextId(messages) {
  return messages.length ? messages[messages.length - 1].id + 1 : 0;
}

nextId.propTypes = {
  messages: {
    messages: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        userName: PropTypes.string,
        timestamp: PropTypes.object,
        text: PropTypes.string
      })
    )
  }
};

function createMessage(text, messageId) {
  return {
    id: messageId,
    userName: "Myself",
    text: text,
    timestamp: new Date()
  };
}

createMessage.propTypes = {
  text: PropTypes.string,
  messageId: PropTypes.number
};

class Slack extends React.Component {
  static propTypes = {
    channelId: PropTypes.number,
    usersId: PropTypes.number,
    handleMessagesById: PropTypes.string,
    activeChannelId: PropTypes.number,
    activeUserId: PropTypes.number,
    channels: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string
      }).isRequired
    ),
    users: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string
      }).isRequired
    ),
    messages: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        userName: PropTypes.string,
        timestamp: PropTypes.object,
        text: PropTypes.string
      })
    )
  };

  state = {
    channels,
    users,
    messagesByChannelId: createFakeActivity(channels, 15),
    messagesByPersonId: createFakeActivity(users, 5),
    activeChannelId: null,
    activeUserId: null
  };

  handleActiveChannel = channelId => {
    this.setState({
      activeChannelId: channelId,
      activeUserId: null
    });
  };

  handleActiveusers = usersId => {
    this.setState({
      activeUserId: usersId,
      activeChannelId: null
    });
  };

  handleMessagesById = text => {
    const { activeChannelId, activeUserId } = this.state;

    if (activeChannelId) {
      this.setState({
        ...this.state,
        messagesByChannelId: {
          ...this.state.messagesByChannelId,
          [activeChannelId]: [
            ...this.state.messagesByChannelId[activeChannelId],
            createMessage(
              text,
              nextId(this.state.messagesByChannelId[activeChannelId])
            )
          ]
        }
      });
    }

    if (activeUserId) {
      this.setState({
        ...this.state,
        messagesByPersonId: {
          ...this.state.messagesByPersonId,
          [activeUserId]: [
            ...this.state.messagesByPersonId[activeUserId],
            createMessage(
              text,
              nextId(this.state.messagesByPersonId[activeUserId])
            )
          ]
        }
      });
    }
  };

  render() {
    const { channels, activeChannelId, users, activeUserId } = this.state;

    let messages = [];

    let isSomethingSelected = false;

    if (activeChannelId) {
      messages = this.state.messagesByChannelId[activeChannelId];
      isSomethingSelected = true;
    }

    if (activeUserId) {
      messages = this.state.messagesByPersonId[activeUserId];
      isSomethingSelected = true;
    }

    return (
      <div className="slack-container">
        <MenuPanel
          activeChannelId={activeChannelId}
          channels={channels}
          channelSelectedActive={this.handleActiveChannel}
          activeUserId={activeUserId}
          users={users}
          userSelectedActive={this.handleActiveusers}
        />

        {isSomethingSelected ? (
          <ListSidePanel
            messages={messages}
            onSendMessage={this.handleMessagesById}
          />
        ) : (
          <EmptyListSidePanel />
        )}
      </div>
    );
  }
}

export default Slack;
