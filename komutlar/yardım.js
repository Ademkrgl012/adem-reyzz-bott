const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const yardım = new Discord.MessageEmbed()
.setColor("BLACK")
.setTitle("<a:yr_selam:779001625414074448> Yrnex Yardım Menüsüne Hoşgeldin!")
 .setTimestamp()
.setDescription("<a:kitab:775385879618519062> **-eğlence** = __Eğlence komutlarını görüntülersiniz.__ \n <a:ayarlar:765523861806252064> **-moderasyon** = __Moderasyon komutlarını görüntülersiniz.__ \n <a:ur_hopladc:765536907315773450> **-kullanıcı** = __Kullanıcı komutlarını görüntülersiniz.__ \n <a:sarey:765533152248594484> **-logo** = __Logo komutlarını görüntülersiniz.__")
.setImage("https://cdn.discordapp.com/attachments/765269752788025375/765912834592342016/Untitled_design_1.gif")
message.channel.send(yardım)
}
exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["help","y"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'yardım',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'-yardım'
}