import React from "react";
import "./Slack.css";
import ChannelPanel from "./ChannelPanel.js";
import PeoplePanel from "./PeoplePanel.js";


//* activechannel:
//* https://www.freecodecamp.org/forum/t/reactjs-using-setstate-to-update-a-single-property-on-an-object/146772
class Slack extends React.Component {
  state = {
    channels: [
      {
        name: "general",
        isActive: false
      },
      {
        name: "help",
        isActive: false
      },
      {
        name: "react",
        isActive: false
      },
      {
        name: "redux",
        isActive: false
      },
      {
        name: "webpack",
        isActive: false
      },
      {
        name: "react-router",
        isActive: false
      }
    ],
    activeChannel: {}
  };

  setActive = (channel, i) => {
    this.setState(state => {
      const channels = state.channels.map((channel, j) => {
        if (j === i) {
          return (channel.isActive = true);
        } else {
          return channel;
        }
      });
      return {
        channel
      };
    });
  };

  render() {
    let { channels } = this.state;
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
