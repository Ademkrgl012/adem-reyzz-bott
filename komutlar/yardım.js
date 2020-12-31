const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  const yardım = new Discord.MessageEmbed()
    .setColor("BLACK")
    .setTitle("<a:kitab:775385879618519062> Yrnex Yardım Menüsüne Hoşgeldin!")
    .setTimestamp()
    .addField("y!yardım")
    .setDescription("d")
    .setImage("https://cdn.discordapp.com/attachments/781872196654071819/793873257395912704/standard_19.gif");
  message.channel.send(yardım);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["help", "y"],
  permLevel: `Yetki gerekmiyor.`
};

exports.help = {
  name: "yardım",
  category: "kullanıcı",
  description: "Yardım Menüsü.",
  usage: "y!yardım"
};
