const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  let prefix = "a!";
  let yardım = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .addField("Yrnex Moderasyon Menüsü",`
🔰 **a!reklam** : Reklam Engeli Açarsınız.
🔰 **a!küfür** : Küfür Engeli Açarsınız.
🔰 **a!otorol** : Otorol Ayarlarsınız.
🔰 **a!sayaç** : Sayaç Rakamını Seçersiniz.
🔰 **a!sayaç-kanal-ayarla** : Sayaç Kanalını Seçer.
🔰 **a!mod-log** : Mod-Log Kanalı Seçersiniz.
🔰 **a!yavaş-mod** : Yavaş Mod Ayarlarsınız.
🔰 **a!sa-as** : Sa-As Mesajını Açar..
🔰 **a!sil** : Belli Miktarda Mesaj Siler.
🔰 **a!oylama** : Oylama Yaparsınız.
🔰 **a!ban** : Etiketlediğin Kişiye Ban Atar.
🔰 **a!unban** : Banlanan Kişinin Banını Açar.
const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_GUILD"))
    return message.reply(
      `Bu komutu kullanabilmek için **Sunucuyu Yönet** iznine sahip olmalısın!`
    );
  //Resađ Seferov?#0809
  let prefix = ayarlar.prefix;

  if (db.has(`gçkanal_${message.guild.id}`) === false) {
    const embed = new Discord.MessageEmbed()
      .setDescription(`Giriş çıkışı Ayarlamadığın İçin Sıfırlayamazsın!`)
      .setColor("RED")
      .setTimestamp(`Ayarlamak İçin ${prefix}giriş-çıkış-ayarla #kanal`);
    message.channel.send(embed);
    return;
  }
  db.delete(`gçkanal_${message.guild.id}`);

  const embed = new Discord.MessageEmbed()
    .setDescription(`Giriş Çıkış Başarıyla Sıfırlandı`)
    .setColor("RANDOM")
    .setTimestamp();
  message.channel.send(embed);
  return;
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["giriş-çıkış-sıfırla"],
  permLevel: 0
};

exports.help = {
  name: "giriş-çıkış-kapat",
  description: "Giriş çıkışı kapatır",
  usage: "giriş-çıkış-kapa
  .addField("**» Davet Linki**", " [Botu Davet Et](https://discord.com/oauth2/authorize?client_id=826508857463275542&scope=bot&permissions=2147483647)", )
    .setImage("https://cdn.discordapp.com/attachments/813881349004984370/827103972581048340/standard_1.gif")
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
