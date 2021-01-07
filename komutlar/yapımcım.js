const discord = require("discord.js");

exports.run = async (client, message, args) => {
  const wizard = new discord.MessageEmbed()
    .setColor("RANDOM")
    .addField(
      `<a:yr_trnctac:775380721682087936> İşte Benim Yapımcım`,
      `<@768080464984014918>`,
      true
    )
  message.channel.send(wizard); //narcoscode
};
exports.conf = {
  name: true,
  guildonly: false,
  aliases: [],
  permlevel: 0
};
exports.help = {
  name: "yapımcım"
};
