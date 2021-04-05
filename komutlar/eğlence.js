const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  let prefix = "a!";
  let yardım = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .addField(
      "Adem Reyzz Eğlence Menüsü",
      `
✨ **a!fbi** : FBİ Gelir.
✨ **a!token** : Botun Tokenini Görürsünüz.
✨ **a!atam** : Dene ve Gör Reis.
✨ **a!vine** : Komik Paylaşımlar.
✨ **a!kasaaç**: Csgo Kasası Açar.
✨ **a!sor**: Bota Soru Sorduğunuzda Cevap Verir.
✨ **a!yaş-hesapla**: Yaşınızı Hesaplar.
✨ **a!zar-at**: Zar Atarsınız.`
    )
    .addField(
      "**» Davet Linki**",
      " [Botu Davet Et](https://discord.com/oauth2/authorize?client_id=826508857463275542&scope=bot&permissions=2147483647)"
    )
    .setImage(
      "https://cdn.discordapp.com/attachments/813881349004984370/827103972581048340/standard_1.gif"
    )
    .setFooter(
      `${message.author.tag} Tarafından İstendi.`,
      message.author.avatarURL()
    )
    .setThumbnail(client.user.avatarURL());
  message.channel.send(yardım);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["eğlence"],
  permLevel: 0
};

exports.help = {
  name: "eğlence",
  category: "eğlence",
  description: "Eğlence Komutları Gösterir."
};
