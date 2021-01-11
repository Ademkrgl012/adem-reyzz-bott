const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = 'y!'
let yardım = new Discord.MessageEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL())
.setColor('RANDOM')
.addField('<:yrnex_youtube:794170019034038314> Abone Rol Menüsü',`
<:emoji_1:793928364133056513> **y!abone-yetkili-rol** : Abone Yetkilisini Seçer.
<:emoji_1:793928364133056513> **y!abone-rol** : Vericeğiniz Rolü ayarlarsınız.
<:emoji_1:793928364133056513> **y!abone-log** : Log mesajınn gitceği yer seçilir.
<:emoji_1:793928364133056513> **y!abone** : Abone Rolü verme komutudur.`)
    .setImage("https://cdn.discordapp.com/attachments/797899158807117867/798281669961842806/standard_22.gif")
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
.setThumbnail(client.user.avatarURL())
 message.channel.send(yardım) 
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['abone-yardım'],
  permLevel: 0
};

exports.help = {
  name: "abone-yardım",
  category: "abone-yardım",
    description: "Eğlence Komutları Gösterir."
};