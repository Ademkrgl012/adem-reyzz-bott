const reqEvent = (event) => require(`../eventler/${event}`);
module.exports = client => {
  client.on('message', reqEvent('message'));
};
