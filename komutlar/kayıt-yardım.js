const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = 'y!'
let yardım = new Discord.MessageEmbed()  
.setColor('RANDOM')
.addField('<a:yrnex_squadab:800738698513481758> Yrnex Kayıt Menüsü',`
<:emoji_4:793928460661555240> **y!kayıt-kanal-ayarla** : Kayıt Kanalını Ayarlarsınız.
<:emoji_4:793928460661555240> **y!kayıt-ol** : Kayıt Olma Komutudur.`)
.addField("**» Davet Linki**", " [Botu Davet Et](https://discord.com/api/oauth2/authorize?client_id=787328444954050570&permissions=8&scope=bot)", )
    .setImage("https://cdn.discordapp.com/attachments/797899158807117867/798281669961842806/standard_22.gif")
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
.setThumbnail(client.user.avatarURL())
 message.channel.send(yardım) 
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kayıt-yardım'],
  permLevel: 0
};

exports.help = {
  name: "kayıt-yardım",
  category: "kayıt-yardım",
    description: "Eğlence Komutları Gösterir."
};