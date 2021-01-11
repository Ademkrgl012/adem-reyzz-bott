const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = 'y!'
let yardım = new Discord.MessageEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL())
.setColor('RANDOM')
.addField('<a:yrnex_vumpus:798264436761559051> Yrnex Yardım Menüsü',`
<:emoji_1:793928339261227020> **y!moderasyon** : Moderasyon Komutları.
<:emoji_1:793928364133056513> **y!abone-yardım** : Abone Rol Komutları.
<:emoji_3:793928384932610099> **y!kullanıcı** : Kullanıcı Komutları (YAKINDA).
<:emoji_4:793928482463154186> **y!eğlence** : Eğlence Komutları (YAKINDA).`)
    .setImage("https://cdn.discordapp.com/attachments/797899158807117867/798281669961842806/standard_22.gif")
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
.setThumbnail(client.user.avatarURL())
 message.channel.send(yardım) 
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım'],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  category: "yardım",
    description: "Eğlence Komutları Gösterir."
};