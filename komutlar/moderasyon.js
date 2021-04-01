const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  let prefix = "a!";
  let yardım = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .addField(
      "Adem Reyzz Moderasyon Menüsü",
      `
🔰 **a!reklam** : Reklam Engeli Açarsınız.
🔰 **a!küfür** : Küfür Engeli Açarsınız.
🔰 **a!otorol** : Otorol Ayarlarsınız.
🔰 **a!sayaç** : Sayaç Rakamını Seçersiniz.
🔰 **a!sayaç-kanal-ayarla** : Sayaç Kanalını Seçer.
🔰 **a!mod-log** : Mod-Log Kanalı Seçersiniz.
🔰 **a!yavaş-mod** : Yavaş Mod Ayarlarsınız.
🔰 **a!sa-as** : Sa-As Mesajını Açar..
🔰 **a!sil** : Belli Miktarda Mesaj Siler.
🔰 **a!oylama** : Oylama Yaparsınız.`
    )
    .addField("**» Davet Linki**"," [Botu Davet Et](https://discord.com/api/oauth2/authorize?client_id=787328444954050570&permissions=8&scope=bot)")
    .addImage("https://cdn.discordapp.com/attachments/813881349004984370/826793395677691924/350kb_1.gif")
    .setFooter(`${message.author.tag} Tarafından İstendi.`,message.author.avatarURL())
    .setThumbnail(client.user.avatarURL());
  message.channel.send(yardım);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["moderasyon"],
  permLevel: 0
};

exports.help = {
  name: "moderasyon",
  category: "moderasyon",
  description: "Eğlence Komutları Gösterir."
};
