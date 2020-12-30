const Discord = require("discord.js");

exports.run = (client, message) => {
  let sa = new Discord.MessageEmbed()
    .setThumbnail(message.author.displayAvatarURL())
    .setAuthor(client.user.username, client.user.avatarURL)
    .addField(
      "Sunucu & Kullanıcı Toplam",
      `> <a:ok2:783683621885968424> Toplam sunucu: **${
        client.guilds.cache.size
      }** 
\n> <a:ok2:783683621885968424> Toplam kullanıcı: **${client.guilds.cache
        .reduce((a, b) => a + b.memberCount, 0)
        .toLocaleString()}** 
`
    )
    .addField(
      "Bot Sahibi & Geliştirici",
      `> <a:ok2:783683621885968424> Bot Sahibi & Geliştiricisi => <@768080464984014918>`
    )
    .addField(
      "Sürümler",
      `> <a:ok2:783683621885968424> Discord.js sürümü: **v${Discord.version}** 
\n> <a:ok2:783683621885968424> Node.js sürümü: **${process.version}**`
    )
    .setTimestamp();
  message.channel.send(sa);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  permLevel: 0,
  aliases: ["istatistik", "i"]
};

exports.help = {
  name: "istatistik",
  description: "Türkiyenin Saatini Gösterir ",
  usage: "gç"
};
