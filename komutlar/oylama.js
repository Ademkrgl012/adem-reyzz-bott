const Discord = require("discord.js");

exports.run = (client, message, args) => {
  if (message.channel.type == "dm") return;
  if (message.channel.type !== "text") return;

  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`Bu Komutu Kullanabilmek İçin **Mesajları Yönet** İznine Sahip Olmalısın Ama Senin Yok Kullanamazsın`).then(m => m.delete({ timeout: 10000}));

  message.delete();

  let köseoylama = args.join(" ");

  let user = message.author.username;

  if (!köseoylama) return message.channel.send(new Discord.MessageEmbed().setTitle(`Yazı Yazmayı Unuttun Kanka`)).then(m => m.delete(({ timeout: 5000})));

  message.channel.send(new Discord.MessageEmbed()
        .setColor("BLACK")
        .addField(`Oylama Yapınız`, `**${köseoylama}**`)
        .addField(`Komutu Kullanan Kişi ${message.author.tag}`,`Evet için 👍 Hayır için 👎 Oylayınız.`)
        .setDescription(` Not : Lütfen 2 Emojiyide Basmayınız`)
        .setThumbnail(client.user.avatarURL())
        .setFooter("Yrnex Oylama Sistemi", client.user.avatarURL())
    )
    .then(function(message) {
    message.react(`👍`);
    message.react(`👎`);
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["oylama"],
  permLevel: 0
};

exports.help = {
  name: "oylama",
  description: "yardım menüsü.",
  usage: "yardım"
};