  const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = async (bot, message, args) => {
message.delete();

const pinkcode = new Discord.MessageEmbed()

    .setColor("BLACK")
    .setDescription(
      `Sunucunun tacı şuanda , kurucu olan bu Güzel Kardeşimde.<@${message.guild.owner.id}>`
    )
    .setFooter(`Komutu kullanan: ${message.author.tag}`);

return message.channel.send(pinkcode).then(msg => {
msg.delete(30000);
  });
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kurucu','taç','sahip','taç-kimde'],
  permLevel: 0
};

exports.help = {
  name: "taç-kimde",
  description: "",
  usage: ""
};