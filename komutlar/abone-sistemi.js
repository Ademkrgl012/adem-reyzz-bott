const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const mod = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle("<:YouTube:791401370560495668> Yrnex Abone Sistemi Komutları! ")
.setTimestamp()
.setDescription("<a:yan:765915647557107743> **y!abone-yetkili-rol** = Yazdığınız miktarda mesajı siler.  \n <a:yan:765915647557107743> **y!abone-rol** = Etiketlediğiniz kişiyi banlarsınız.  \n <a:yan:765915647557107743> **y!abone-log** = Etiketlediğiniz kişiyi atarsınız.  \n <a:yan:765915647557107743> **y!abone veya a** = Bota duyuru yaptırırsınız.")
.setImage("https://cdn.discordapp.com/attachments/765269752788025375/765912834592342016/Untitled_design_1.gif")
message.channel.send(mod)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ['abone-sistemi'],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'abone-sistemi',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'-abone-sistemi'
}