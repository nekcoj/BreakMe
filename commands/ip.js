let http = require('http');
async function getIp(message) {
  http.get({'host': 'api.ipify.org', 'port': 80, 'path': '/'}, function(resp) {
    resp.on('data', function(ip) {
      message.channel.send(`Your public IP is: ${ip}`);
    });
  });
}

module.exports = {
  name: "ip",
  description: "Check your ip!",
  async execute(message, args) {
    await getIp(message);
  }
}

