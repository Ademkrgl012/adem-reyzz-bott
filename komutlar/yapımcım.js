const Discord = require("discord.js");

exports.run = (client, message, args) => {
  const rexus = new Discord.MessageEmbed()
    .setColor("BLACK")
    .setDescription("> <a:yrnex_cevelop:800735697060888646> **Yapımcım :** <@768080464984014918> **YV | Yrnex Creative' S#9999**")
    .setFooter("Yrnex Yapımcım")
  message.channel.send(rexus);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "yapımcım",
  description: "",
  usage: ""
};