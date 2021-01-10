const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  const mod = new Discord.MessageEmbed()
    .setColor("GOLD")
    .setTitle("Yrnex Kayıt Sistemi! ")
    .setDescription("**Kayıt Olmak için <a:vumpushype:789105762714255361> Emojisine Tıkla**")
  message.channel.send(mod);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kayıt"],
  permLevel: `Yetki gerekmiyor.`
};

exports.help = {
  name: "kayıt",
  category: "kullanıcı",
  description: "Yardım Menüsü.",
  usage: "kayıt"
};