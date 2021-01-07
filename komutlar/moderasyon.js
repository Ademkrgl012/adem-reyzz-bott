const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  const mod = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("🔰 Yrnex Moderasyon Komutları!")
    .setTimestamp()
    .setDescription(
      "<:emoji_1:793928339261227020> **y!sil** = Yazdığınız miktarda mesajı siler.  \n <:emoji_1:793928339261227020> **y!ban** = Etiketlediğiniz kişiyi banlarsınız.  \n <:emoji_1:793928339261227020> **y!kick** = Etiketlediğiniz kişiyi atarsınız.  \n <:emoji_1:793928339261227020> **y!duyuru** = Bota duyuru yaptırırsınız.  \n <:emoji_1:793928339261227020> **y!küfür** = Küfür engel sistemini açarsınız.  \n <:emoji_1:793928339261227020> **y!reklam** = Reklam engel sistemi açarsınız.  \n <:emoji_1:793928339261227020> **y!slowmode** = Yavaş modu ayarlarsınız.  \n <:emoji_1:793928339261227020> **y!forceban** = Birisine id ban atarsınız.  \n <:emoji_1:793928339261227020> **y!unban** = Birisinin banını açarsınız.  \n <:emoji_1:793928339261227020> **y!sa-as** = Bot biri sa dedimi cevap verir.  \n <:emoji_1:793928339261227020> **y!sunucubilgi** = Sunucu bilgilerini görürsün.  \n <:emoji_1:793928339261227020> **y!üyedurum** = Üyelerin durumlarını görürsün.  \n <:emoji_1:793928339261227020> **y!çekiliş** = . "
    )
    .setImage(
      "https://cdn.discordapp.com/attachments/765269752788025375/765912834592342016/Untitled_design_1.gif"
    );
  message.channel.send(mod);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["mod"],
  permLevel: `Yetki gerekmiyor.`
};

exports.help = {
  name: "moderasyon",
  category: "kullanıcı",
  description: "Yardım Menüsü.",
  usage: "y!moderasyon"
};
