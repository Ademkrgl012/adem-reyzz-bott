const Discord = require("discord.js");

exports.run = (client, message) => {

let motion = new Discord.MessageEmbed()
  

    .addField(
      "Veriler", 
      `> <a:squad:775385865492234260> Toplam sunucu: **${
        client.guilds.cache.size
      }** \n> <a:squad:775385865492234260> Toplam kullanıcı: **${client.guilds.cache
        .reduce((a, b) => a + b.memberCount, 0)
        .toLocaleString()}** \n> <a:squad:775385865492234260> Toplam kanal: **${
        client.channels.cache.size
      }**`
    ) 
    .addField(
      "Bot Geliştiricisi",
      `> <a:yrnex_cevelop:800735697060888646> Bot geliştiricisi : <@768080464984014918> | **Yrnex Creative' S#0612**`
    ) 
    .addField(
      "Sürümler",
      `> <a:squad:775385865492234260> Discord.js sürümü: **v${Discord.version}** \n> <a:squad:775385865492234260> Node.js sürümü: **${process.version}**`
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