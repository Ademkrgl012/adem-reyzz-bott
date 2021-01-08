const dc = require("discord.js");

exports.run = async (client, message, args) => {
  message.member.roles.add("797119355912978443")
  message.react("<:yr_evet:793837194175447090>")
  message.channel.send("<:js:797120176419897394> • **JavaScript Rolü Başarıyla Verildi.**")
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