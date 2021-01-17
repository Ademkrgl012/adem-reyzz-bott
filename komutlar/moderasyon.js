const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  let prefix = "y!";
  let yardım = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .addField("<:yrnex_pols:794269931432181830> Moderasyon Menüsü",`
<:emoji_1:793928339261227020> **y!reklam** : Reklam Engeli Açarsınız.
<:emoji_1:793928339261227020> **y!küfür** : Küfür Engeli Açarsınız.
<:emoji_1:793928339261227020> **y!otorol** : Otorol Ayarlarsınız.
<:emoji_1:793928339261227020> **y!sayaç** : Sayaç Rakamını Seçersiniz.
<:emoji_1:793928339261227020> **y!sayaç-kanal-ayarla** : Sayaç Kanalını Seçer.
<:emoji_1:793928339261227020> **y!mod-log** : Mod-Log Kanalı Seçersiniz.
<:emoji_1:793928339261227020> **y!yavaş-mod** : Yavaş Mod Ayarlarsınız.
<:emoji_1:793928339261227020> **y!sa-as** : Sa-As Mesajını Açar..
<:emoji_1:793928339261227020> **y!sil** : Belli Miktarda Mesaj Siler.
<:emoji_1:793928339261227020> **y!oylama** : Oylama Yaparsınız.`)
  .addField("**» Davet Linki**", " [Botu Davet Et](https://discord.com/api/oauth2/authorize?client_id=787328444954050570&permissions=8&scope=bot)", )
    .setImage("https://cdn.discordapp.com/attachments/797899158807117867/798281669961842806/standard_22.gif")
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
