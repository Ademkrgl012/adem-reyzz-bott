const dc = require("discord.js");

exports.run = async (client, message, args) => {
  message.member.roles.add("ROL ID")
  message.react("✅")
  message.channel.send("✅ • **JavaScript Rolü Başarıyla Verildi.**")
}
exports.conf = {
  enabled: true,
  guildonly: true,
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: "js"
}