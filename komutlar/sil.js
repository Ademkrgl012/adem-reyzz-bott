const Discord = require("discord.js");
const data = require("quick.db");

exports.run = async (client, message, args) => {
  if (!message.member.permissions.has("MANAGE_MESSAGES"))
    return message.channel.send(
      new Discord.MessageEmbed().setTitle(
        "**`Mesajları Yönet` İzni sende yok.**"
      )
    );
  if (!args[0])
    return message.channel.send(
      new Discord.MessageEmbed().setTitle(
        "<:yr_hayr:793837203478020127> Silinecek miktar giriniz."
      )
    );
  if (args[0] > 100)
    return message.channel.send(
      new Discord.MessageEmbed().setTitle(
        "<:yr_hayr:793837203478020127> Mesaj silme limiti `100` üzeri mesajı aynı anda silemem."
      )
    );
  message.channel.bulkDelete(args[0]);
  return message.channel
    .send(
      new Discord.MessageEmbed().setTitle(
        "<:yr_evet:793837194175447090>  " +
          `${args[0]}` +
          " Adet mesaj silindi."
      )
    )
    .then(m => m.delete({ timeout: 5000 }));
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "sil"
};
