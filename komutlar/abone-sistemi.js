const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const mod = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle("<:YouTube:791401370560495668> Yrnex Abone Sistemi Komutları! ")
.setTimestamp()
.setDescription("<:sagok:793884316564324362> **y!abone-yetkili-rol** = Abone Rolünü vericek yetkili rolünü seçer.  \n <a:yan:765915647557107743> **y!abone-rol** = Vericeğiniz Rolü ayarlarsınız.  \n <a:yan:765915647557107743> **y!abone-log** = Log mesajınn gitceği yer seçilir.  \n <a:yan:765915647557107743> **y!abone veya a** = Abone Rolü verme komutudur.")
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