const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_ROLES"))
    return message.channel.send(
      "**Bu komutu kullanabilmek için __gerekli yetkiye sahip değilsin__** `Rolleri Yönet`"
    );

  if (!args[0])
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("0x36393E")
        .setDescription(
          "> <a:yrnex_uyar:800419824538091610> **Otorol sistemini ne yapmak istediğini belirtmedin**  \n> `y!otorol ayarla @üye #kanal` **Otorol sistemini ayarlar.** \n> `y!otorol sıfırla` **Otorol sistemini sıfırlar.**"
        )
    );

  if (args[0] === "ayarla") {
    var otorol = message.mentions.roles.first();
    var logkanal = message.mentions.channels.first();
    if (!otorol)
      return message.channel.send(
        new Discord.MessageEmbed()
          .setColor("0x36393E")
          .setDescription(
            "**Bir rol etiketlemelisin** `y!otorol ayarla @rol #kanal` **(Eğer rolü bulamıyorsan etiketleme izninin açık olduğundan veya komutun kullanıldığı kanalı görebildiğinden emin ol)**"
          )
      );
    if (!logkanal)
      return message.channel.send(
        new Discord.MessageEmbed()
          .setColor("0x36393E")
          .setDescription(
            "**Bir kanal etiketlemelisin eğer kanalı etiketleyemiyorsan botun o kanalı gördüğünden emin ol.**"
          )
      );

    db.set(`logkanal_{message.guild.id}`, logkanal.id);
    db.set(`otorol_${message.guild.id}`, otorol.id);

    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("0x36393E")
        .setDescription(
          "> **Otorol Sistemi Aktif edildi** <a:yrnex_tiks:798275047047168041> \n> **Sunucuya giren kişilere verilecek rol** <@&" +
            otorol +
            "> \n> **Otorol mesajının gideceği kanal** <#" +
            logkanal.id +
            "> **Olarak ayarlandı.**"
        )
    );
  }

  if (args[0] === "sıfırla") {
    let user = message.author;
    message.channel
      .send(
        "**Otorol Sistemini sıfırlamak istediğinden eminmisin eğer eminsen** :white_check_mark: **değilsen** :x: **Tepkisine bas.**"
      )
      .then(async m => {
        await m.react("✅").then(r => {
          let onay = (reaction, user) =>
            reaction.emoji.name === "✅" && user.id == message.author.id;
          let onay2 = m.createReactionCollector(onay);
          onay2.on("collect", async r => {
            db.delete(`logkanal_{message.guild.id}`);
            db.delete(`otorol_${message.guild.id}`);
            m.reactions.removeAll();
            m.edit("**Otorol sistemi kapatıldı.** <a:yrnex_tiks:798275047047168041>");
          });
        });
        await m.react("❌").then(r => {
          let onay = (reaction, user) =>
            reaction.emoji.name == "❌" && user.id == message.author.id;
          let onay2 = m.createReactionCollector(onay);
          onay2.on("collect", async r => {
            m.reactions.removeAll();
            m.edit("**Otorol kapatma işlemi iptal edildi.** <a:yrnex_tiks:798275047047168041>");
          });
        });
      });
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permlevel: 0
};

exports.help = {
  name: "otorol"
};
