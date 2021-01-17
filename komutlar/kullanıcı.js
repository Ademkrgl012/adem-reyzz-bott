const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = 'y!'
let yardım = new Discord.MessageEmbed()  
.setColor('RANDOM')
.addField('<:coffeee:794115205176885298> Yrnex Kullanıcı Menüsü',`
<:emoji_3:793928384932610099> **y!profil** : Kullanıcı Bilginizi Görürsünüz.
<:emoji_3:793928384932610099> **y!avatar** : Avatarınıza Bakarsınız.
<:emoji_3:793928384932610099> **y!say** : Sunucudaki Üye Sayısını Gösterir.
<:emoji_3:793928384932610099> **y!afk** : AFK Olma Komutudur.
<:emoji_3:793928384932610099> **y!yetkilerim** : Sunucudaki Yetkinize Bakarsınız.
<:emoji_3:793928384932610099> **y!ping** : Botun Pingine Bakarsınız.
<:emoji_3:793928384932610099> **y!i** : Botun İstatistiklerine Bakarsınız.
<:emoji_3:793928384932610099> **y!bug-bildir** : Botun Bugunu Bildirirsiniz.
<:emoji_3:793928384932610099> **y!davet** : Botu Davet Edersiniz.`)
.addField("**» Davet Linki**", " [Botu Davet Et](https://discord.com/api/oauth2/authorize?client_id=787328444954050570&permissions=8&scope=bot)", )
    .setImage("https://cdn.discordapp.com/attachments/797899158807117867/798281669961842806/standard_22.gif")
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
.setThumbnail(client.user.avatarURL())
 message.channel.send(yardım) 
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kullanıcı'],
  permLevel: 0
};

exports.help = {
  name: "kullanıcı",
  category: "kullanıcı",
    description: "Eğlence Komutları Gösterir."
};