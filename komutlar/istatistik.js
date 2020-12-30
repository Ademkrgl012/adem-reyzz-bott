const Discord = require("discord.js");

exports.run = (client, message) => {
  let sa = new Discord.MessageEmbed()
    .setThumbnail(message.author.displayAvatarURL())
    .setAuthor(client.user.username, client.user.avatarURL)
    .addField(
      "Sunucu & Kullanıcı Toplam",
      `> <a:vumpushype:789105762714255361> Toplam sunucu: **${
        client.guilds.cache.size
      }** 
\n> <a:vumpushype:789105762714255361> Toplam kullanıcı: **${client.guilds.cache
        .reduce((a, b) => a + b.memberCount, 0)
        .toLocaleString()}** 
`
    )
    .addField(
      "Bot Sahibi & Geliştirici",
      `> <a:vumpushype:789105762714255361> Bot Sahibi & Geliştiricisi => <@768080464984014918>`
    )
    .addField(
      "Sürümler",
      `> <a:vumpushype:789105762714255361> Discord.js sürümü: **v${Discord.version}** 
\n> <a:vumpushype:789105762714255361> Node.js sürümü: **${process.version}**`
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
