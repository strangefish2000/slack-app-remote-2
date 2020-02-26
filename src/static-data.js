import { PropTypes } from "prop-types";

const channels = [
  { id: 1, name: "react" },
  { id: 2, name: "redux", hasUnreads: true },
  { id: 3, name: "mobx" },
  { id: 4, name: "react-router" }
];

const users = [
  { id: 1, name: "Dave" },
  { id: 2, name: "Sarah" },
  { id: 3, name: "Zack" },
  { id: 4, name: "Pam" },
  { id: 5, name: "Erin" },
  { id: 6, name: "Joe" }
];

function generateFakeMessages(count) {
  return Array.from(Array(count).keys()).map(i => {
    const userName = randomUser();
    return {
      id: i,
      userName,
      text: `A message from ${userName}`,
      timestamp: new Date()
    };
  });
}

generateFakeMessages.propTypes = {
  count: PropTypes.number.isRequired
};

function randomUser() {
  return users.map(u => u.name)[
    Math.floor(Math.random() * 1000) % users.length
  ];
}

function createFakeActivity(channels, maxMessages) {
  return channels.reduce((result, channel) => {
    const rndNum = Math.floor(Math.random() * maxMessages);
    result[channel.id] = generateFakeMessages(rndNum);
    return result;
  }, {});
}

createFakeActivity.propTypes = {
  maxMessages: PropTypes.number,
  channels: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string
    }).isRequired
  )
};

export { channels, users, createFakeActivity };
