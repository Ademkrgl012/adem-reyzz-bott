const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  const kullanıcı = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("👥 Yrnex Kullanıcı Komutları!")
    .setTimestamp()
    .setDescription(
      "<:emoji_3:793928384932610099> **y!avatar** = Avatarınızı görürsün.  \n <:emoji_3:793928384932610099> **y!yetkilerim** = Yetkilerini görürsün.  \n <:emoji_3:793928384932610099> **y!profil** = Profilini görürsün.  \n <:emoji_3:793928384932610099> **y!sunucuresmi** = Sunucu resmini gösterir.  \n <:emoji_3:793928384932610099> **y!ping** = Botun Pingine Bakarsın.  \n <:emoji_3:793928384932610099> **y!id** = Birisinin id'sine Bakarsın.  \n <:emoji_3:793928384932610099> **y!davet** = Beni Sunucuna Ekle.  \n <:emoji_3:793928384932610099> **y!istatistik** = Bot istatistiklerini görürsünüz.  \n <:emoji_3:793928384932610099> **y!bug-bildir** = Yazdığınız bug'u yapımcılarıma bildirir. "
    )
    .setImage(
      "https://cdn.discordapp.com/attachments/765269752788025375/765912834592342016/Untitled_design_1.gif"
    );
  message.channel.send(kullanıcı);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: `Yetki gerekmiyor.`
};

exports.help = {
  name: "kullanıcı",
  category: "kullanıcı",
  description: "Yardım Menüsü.",
  usage: "y!kullanıcı"
};
