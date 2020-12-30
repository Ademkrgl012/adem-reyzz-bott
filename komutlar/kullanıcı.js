const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const kullanıcı = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle("👥 Yrnex Kullanıcı Komutları!")
 .setTimestamp()
.setDescription("<a:yan:765915647557107743> **y!avatar** = Avatarınıza bakarsınız.  \n <a:yan:765915647557107743> **y!yetkilerim** = Yetkilerini görürsün.  \n <a:yan:765915647557107743> **y!profil** = Profilini görürsün.  \n <a:yan:765915647557107743> **y!sunucuresmi** = Sunucu resmini gösterir.  \n <a:yan:765915647557107743> **y!ping** = Botun Pingine Bakarsın.  \n <a:yan:765915647557107743> **y!id** = Birisinin id'sine Bakarsın.  \n <a:yan:765915647557107743> **y!davet** = Beni Sunucuna Ekle.  \n <a:yan:765915647557107743> **y!botbilgi** = Bot istatistiklerini görürsünüz.  \n <a:yan:765915647557107743> **y!bug-bildir** = Yazdığınız bug'u yapımcılarıma bildirir. ")
.setImage("https://cdn.discordapp.com/attachments/765269752788025375/765912834592342016/Untitled_design_1.gif")
message.channel.send(kullanıcı)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'kullanıcı',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'y!kullanıcı'
}