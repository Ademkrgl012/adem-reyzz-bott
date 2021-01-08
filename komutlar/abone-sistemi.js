const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  const mod = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("<:YouTube:791401370560495668> Yrnex Abone Sistemi Komutları! ")
    .setTimestamp()
    .setDescription(
      "<:emoji_1:793928364133056513> **+gstart** = Abone Rolünü vericek yetkili rolünü seçer.  \n <:emoji_1:793928364133056513> **+greroll** = Çekilişi kazanan kişiyi değiştirsiniz.  \n <:emoji_1:793928364133056513> **+gend** = Seçilen çekilişi bitir.  \n <:emoji_1:793928364133056513> **+gedit** = Bi çekilişe edit atarsınız.  \n <:emoji_1:793928364133056513> **+ping** = Botun ping'ini gösterir."
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
