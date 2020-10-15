const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const mod = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle("<a:yldz:765522787610787850> Starby Moderasyon Komutları! <a:yldz:765522787610787850>")
 .setTimestamp()
.setDescription("<a:yan:765915647557107743> **-sil** = Yazdığınız miktarda mesajı siler.  \n <a:yan:765915647557107743> **-ban** = Etiketlediğiniz kişiyi banlarsınız.  \n <a:yan:765915647557107743> **-kick** = Etiketlediğiniz kişiyi atarsınız.  \n <a:yan:765915647557107743> **-duyuru** = Bota duyuru yaptırırsınız.  \n <a:yan:765915647557107743> **-küfür** = Küfür engel sistemini açarsınız.  \n <a:yan:765915647557107743> **-reklam** = Reklam engel sistemi açarsınız.  \n <a:yan:765915647557107743> **-slowmode** = Yavaş modu ayarlarsınız.  \n <a:yan:765915647557107743> **-forceban** = Birisine id ban atarsınız.  \n <a:yan:765915647557107743> **-unban** = Birisinin banını açarsınız.  \n <a:yan:765915647557107743> **-sa-as** = Bot biri sa dedimi cevap verir.  \n <a:yan:765915647557107743> **-sunucubilgi** = Sunucu bilgilerini görürsün.  \n <a:yan:765915647557107743> **-üyedurum** = Üyelerin durumlarını görürsün.  \n <a:yan:765915647557107743> **-çekiliş** = Çekiliş başlatırsınız. ")
.setImage("https://cdn.discordapp.com/attachments/765269752788025375/765912834592342016/Untitled_design_1.gif")
message.channel.send(mod)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ['mod'],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'moderasyon',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'-moderasyon'
}