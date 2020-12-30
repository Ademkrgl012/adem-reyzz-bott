const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const mod = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle("🔰 Yrnex Moderasyon Komutları!")
 .setTimestamp()
.setDescription("<a:yan:765915647557107743> **y!sil** = Yazdığınız miktarda mesajı siler.  \n <a:yan:765915647557107743> **y!ban** = Etiketlediğiniz kişiyi banlarsınız.  \n <a:yan:765915647557107743> **y!kick** = Etiketlediğiniz kişiyi atarsınız.  \n <a:yan:765915647557107743> **y!duyuru** = Bota duyuru yaptırırsınız.  \n <a:yan:765915647557107743> **y!küfür** = Küfür engel sistemini açarsınız.  \n <a:yan:765915647557107743> **y!reklam** = Reklam engel sistemi açarsınız.  \n <a:yan:765915647557107743> **y!slowmode** = Yavaş modu ayarlarsınız.  \n <a:yan:765915647557107743> **y!forceban** = Birisine id ban atarsınız.  \n <a:yan:765915647557107743> **y!unban** = Birisinin banını açarsınız.  \n <a:yan:765915647557107743> **y!sa-as** = Bot biri sa dedimi cevap verir.  \n <a:yan:765915647557107743> **y!sunucubilgi** = Sunucu bilgilerini görürsün.  \n <a:yan:765915647557107743> **y!üyedurum** = Üyelerin durumlarını görürsün.  \n <a:yan:765915647557107743> **y!çekiliş** = Çekiliş başlatırsınız. ")
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
   usage:'y!moderasyon'
}