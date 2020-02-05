import React from "react";
import "./channel.css";

const data = {
  name: general,
  isActive: false
};

const ChannelList = ({ channels }) => (
  <div className="channel-list">
    <span>
      {channels.map(channel => (
        <Channel key={channel.name} channel={channel} />
      ))}
    </span>
  </div>
);

const Channel = ({ channel }) => {
  return (
    <>
      <p className="channel" data={data}>
        # {channel.name}
      </p>
    </>
  );
};

export default ChannelList;

// import React from "react";
// import "./channel.css";

// const data = {
//   name: general,
//   isActive: false
// };

// const Channel = ({ data }) => {
//   return (
//     <>
//       <p className="channel" data={data}>
//         # {data.name}
//       </p>
//     </>
//   );
// };

// class Channel extends React.Component {
//   render() {

//     return (
//       <>
//         <p className="channel"># {data.name}</p>
//       </>
//     );
//   }
// }

// export default Channel;
