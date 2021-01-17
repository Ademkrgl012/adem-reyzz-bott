const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = 'y!'
let yardım = new Discord.MessageEmbed()  
.setColor('RANDOM')
.addField('<:yrnex_selam:794269899308531773> Yrnex Yardım Menüsü',`
<:emoji_1:793928339261227020> **y!moderasyon** : Moderasyon Komutları.
<:emoji_1:793928364133056513> **y!abone-yardım** : Abone Rol Komutları.
<:emoji_3:793928384932610099> **y!kullanıcı** : Kullanıcı Komutları.
<:emoji_4:793928482463154186> **y!eğlence** : Eğlence Komutları (YAKINDA).`)
.addField("**» Davet Linki**", " [Botu Davet Et](https://discord.com/api/oauth2/authorize?client_id=787328444954050570&permissions=8&scope=bot)", )
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