import React from "react";
import "./Slack.css";
import ChannelPanel from "./ChannelPanel.js";
import PeoplePanel from "./PeoplePanel.js";

class Slack extends React.Component {
  state = {};

  render() {
    let { channels } = this.props;
    return (
      <div className="slack-container">
        <div className="menu-panel">
          <div className="channels">
            <ChannelPanel channels={channels} />
          </div>
          <div className="people">
            <PeoplePanel />
          </div>
        </div>
        <div className="list-panel">List Panel</div>
      </div>
    );
  }
}

export default Slack;
