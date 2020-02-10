import React from "react";
import "./channel.css";

const Channel = ({ channel, onActiveClick, activeChannelId }) => {
  return (
    <button
      className={
        activeChannelId === channel.id
          ? "channel-button-active"
          : "channel-button"
      }
      channel={channel}
      onClick={onActiveClick}
      isActive={activeChannelId === channel.id}
    >
      # {channel.name}
    </button>
  );
};

export default Channel;

//.................

// import React from "react";
// import "./channel.css";

// const Channel = ({ channel, onActiveClick, activeChannelId }) => {
//   return (
//     <button
//       className="channel-button"
//       channel={channel}
//       onClick={onActiveClick}
//       isActive={activeChannelId === channel.id}
//     >
//       # {channel.name}
//     </button>
//   );
// };

// export default Channel;

//..................

// import React from "react";
// import "./channel.css";

// const Channel = ({ channel, onActiveClick }) => {
//   return (
//     <button
//       className="channel-button"
//       channel={channel}
//       onClick={onActiveClick}
//     >
//       # {channel.name}
//     </button>
//   );
// };

// export default Channel;
