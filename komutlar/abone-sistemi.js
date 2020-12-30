const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  const mod = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("<:YouTube:791401370560495668> Yrnex Abone Sistemi Komutları! ")
    .setTimestamp()
    .setDescription(
      "<:emoji_1:793928364133056513> **y!abone-yetkili-rol** = Abone Rolünü vericek yetkili rolünü seçer.  \n <:emoji_1:793928364133056513> **y!abone-rol** = Vericeğiniz Rolü ayarlarsınız.  \n <:emoji_1:793928364133056513> **y!abone-log** = Log mesajınn gitceği yer seçilir.  \n <:emoji_1:793928364133056513> **y!abone veya a** = Abone Rolü verme komutudur."
    )
    .setImage(
      "https://cdn.discordapp.com/attachments/765269752788025375/765912834592342016/Untitled_design_1.gif"
    );
  message.channel.send(mod);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["abone-sistemi"],
  permLevel: `Yetki gerekmiyor.`
};

exports.help = {
  name: "abone-sistemi",
  category: "kullanıcı",
  description: "Yardım Menüsü.",
  usage: "-abone-sistemi"
};
