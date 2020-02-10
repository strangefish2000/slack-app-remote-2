import React from "react";
import "./Slack.css";
import ChannelPanel from "./ChannelPanel.js";
import PeoplePanel from "./PeoplePanel.js";

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
    activeChannelId: null
  };

  handleActiveChannel = channelId => {
    this.setState({
      activeChannelId: channelId
    });
  };

  render() {
    const { channels, activeChannelId } = this.state;
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

//............................

// import React from "react";
// import "./Slack.css";
// import ChannelPanel from "./ChannelPanel.js";
// import PeoplePanel from "./PeoplePanel.js";

// class Slack extends React.Component {
//   state = {
//     channels: [
//       {
//         name: "general",
//         id: "fsiofh"
//       },
//       {
//         name: "help",
//         id: "dfkgver"
//       },
//       {
//         name: "react",
//         id: "vgaiuf"
//       },
//       {
//         name: "redux",
//         id: "lkfdshae"
//       },
//       {
//         name: "webpack",
//         id: "gdfcgkyu"
//       },
//       {
//         name: "react-router",
//         id: "jkfdgb"
//       }
//     ],
//     activeChannelId: null
//   };

//   handleActiveChannel = channelId => {
//     this.setState({
//       activeChannelId: channelId
//     });
//   };

//   render() {
//     let { channels } = this.state;
//     return (
//       <div className="slack-container">
//         <div className="menu-panel">
//           <div className="channels">
//             <ChannelPanel
//               channels={channels}
//               channelSelectedActive={this.handleActiveChannel}
//             />
//           </div>
//           <div className="people">
//             <PeoplePanel />
//           </div>
//         </div>
//         <div className="list-panel">List Panel</div>
//       </div>
//     );
//   }
// }

// export default Slack;
