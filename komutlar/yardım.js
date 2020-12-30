const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const yardım = new Discord.MessageEmbed()
.setColor("BLACK")
.setTitle("<a:kitab:775385879618519062> Yrnex Yardım Menüsüne Hoşgeldin!")
 .setTimestamp()
.setDescription("🎮 **y!eğlence** = __Eğlence komutlarını görüntülersiniz.__\n 🔰 **y!moderasyon** = __Moderasyon komutlarını görüntülersiniz.__\n 👥 **y!kullanıcı** = __Kullanıcı komutlarını görüntülersiniz.__")
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
   usage:'y!yardım'
}