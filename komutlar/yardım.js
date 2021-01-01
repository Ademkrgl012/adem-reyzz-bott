const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  const yardım = new Discord.MessageEmbed()
    .setColor("BLACK")
    .setTitle("<a:kitab:775385879618519062> Yrnex Yardım Menüsüne Hoşgeldin!")
    .setTimestamp()
     .setDescription(
      "<a:yr_trnctac:775380721682087936> Botu Davet Etmek İçin `y!davet` yazabilirisiniz.",
      false
    )
 .addField(
      "**__MODERASYON__**",
      "<a:yr_cekls:775360594252791858> `y!moderasyon` \nModerasyon Komutlarını Görüntülersiniz.",
      false
    )
 .addField(
      "**__KULLANICI__**",
      "<a:squad:775385865492234260>  `y!kullanıcı` \nKullanıcı Komutlarını Görüntülersiniz.",
      true
    )
    .addField(
      "**__ABONE SİSTEMİ__**",
      "<:yrnex_youtube:794170019034038314> `y!abone-sistemi` \nAbone Rol Komutlarını Görüntülersiniz.",
      false
    )
    .addField(
      "**__Bilgilendirme__**",
      "<a:rainbowzincir:779439237061672981>  `y!davet` | Botu Sununuya Davet Edersiniz \n<a:rainbowzincir:779439237061672981> `y!ping` | Botun İslatistiklerini Görürsünüz",
      true
    )
    .setImage(
      "https://cdn.discordapp.com/attachments/781872196654071819/793873257395912704/standard_19.gif"
    );
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
