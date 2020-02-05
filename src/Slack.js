import React from "react";

const ChannelPanel = () => <span className="channel-panel">ChannelPanel</span>;

const PeoplePanel = () => <span className="people-panel">PeoplePanel</span>;

class Slack extends React.Component {
  state = {};

  render() {
    return (
      <div className="slack-container">
        Slack container
        <ChannelPanel />
        <PeoplePanel />
      </div>
    );
  }
}

export default Slack;
