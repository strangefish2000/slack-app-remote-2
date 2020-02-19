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
    activeUserId: null,
    messageText: {}
  };

  handleActiveChannel = channelId => {
    this.setState({
      activeUserId: null,
      activeChannelId: channelId
    });
  };

  handleActiveusers = usersId => {
    this.setState({
      activeChannelId: null,
      activeUserId: usersId
    });
  };

  handleMessagesByChannelId = event => {
    const { activeChannelId, activeUserId } = this.state;

    if (activeChannelId !== null) {
      return this.setState({
        messageText: {
          id: activeChannelId,
          userName: "Myself",
          text: event.target.value,
          timestamp: new Date()
        }
      });
    }

    if (activeUserId !== null) {
      return this.setState({
        messageText: {
          id: activeUserId,
          userName: "Myself",
          text: event.target.value,
          timestamp: new Date()
        }
      });
    }
  };

  render() {
    const { channels, activeChannelId, users, activeUserId } = this.state;
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
              activeUserId={activeUserId}
              users={users}
              userSelectedActive={this.handleActiveusers}
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
            {activeChannelId || activeUserId !== null ? (
              <InputPanel onMessageChange={this.handleMessagesByChannelId} />
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Slack;

//............................

// import React from "react";
// import "./Slack.css";
// import ChannelPanel from "./ChannelPanel.js";
// import UsersPanel from "./UsersPanel.js";
// import InputPanel from "./InputPanel.js";
// import Messages from "./Messages.js";
// import { channels, users, createFakeActivity } from "./static-data.js";

// class Slack extends React.Component {
//   state = {
//     channels,
//     users,
//     messagesByChannelId: createFakeActivity(channels, 15),
//     messagesByPersonId: createFakeActivity(users, 5),
//     activeChannelId: null,
//     activeUserId: null,
//     messageText: ""
//   };

//   handleActiveChannel = channelId => {
//     this.setState({
//       activeUserId: null,
//       activeChannelId: channelId
//     });
//   };

//   handleActiveusers = usersId => {
//     this.setState({
//       activeChannelId: null,
//       activeUserId: usersId
//     });
//   };

//   handleMessageChange = event => {
//     this.setState({
//       messageText: event.target.value
//     });
//   };

//   render() {
//     const { channels, activeChannelId, users, activeUserId } = this.state;
//     let messages = [];

//     return (
//       <div className="slack-container">
//         <div className="menu-panel">
//           <div className="channels">
//             <ChannelPanel
//               activeChannelId={activeChannelId}
//               channels={channels}
//               channelSelectedActive={this.handleActiveChannel}
//             />
//           </div>
//           <div className="userss">
//             <UsersPanel
//               activeUserId={activeUserId}
//               users={users}
//               userSelectedActive={this.handleActiveusers}
//             />
//           </div>
//         </div>
//         <div className="list-side-panel">
//           <div className="list-panel">
//             <div classname="list-container">
//               <Messages messages={messages} />
//             </div>
//           </div>

//           <div className="input-panel">
//             {activeChannelId || activeUserId !== null ? (
//               <InputPanel onMessageChange={this.handleMessageChange} />
//             ) : null}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Slack;
