const Discord = require("discord.js");

exports.run = (client, message) => {

let motion = new Discord.MessageEmbed()
  

    .addField(
      "Veriler", 
      `> <a:yrnex_krmzvumpus:798604064912965632> Toplam sunucu: **${
        client.guilds.cache.size
      }** \n> <a:yrnex_krmzvumpus:798604064912965632> Toplam kullanıcı: **${client.guilds.cache
        .reduce((a, b) => a + b.memberCount, 0)
        .toLocaleString()}** \n> <a:yrnex_krmzvumpus:798604064912965632> Toplam kanal: **${
        client.channels.cache.size
      }**`
    ) 
    .addField(
      "Bot Geliştiricisi",
      `> <a:yrnex_krmzvumpus:798604064912965632> Bot geliştiricisi <a:yan:784456151844519997> <@768080464984014918> | **Yrnex Creative' S#0612**`
    ) 
    .addField(
      "Sürümler",
      `> <a:yrnex_krmzvumpus:798604064912965632> Discord.js sürümü: **v${Discord.version}** \n> <a:yrnex_krmzvumpus:798604064912965632> Node.js sürümü: **${process.version}**`
    ) 
    
    .setTimestamp()
    .setColor("RANDOM");
  message.channel.send(motion);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  permLevel: 0,
  aliases: ["bot-bilgi", "i"]
};

exports.help = {
  name: "istatistik",
  description: "Türkiyenin Saatini Gösterir ",
  usage: "gç"
};