const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = 'y!'
let yardım = new Discord.MessageEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL())
.setColor('RANDOM')
.addField('<a:yrnex_vumpus:798264436761559051> Yrnex Yardım Menüsü',`Botu Eklemek İçin y!davet`)
        .addField('**__Kayıt Alıncak Rol__**','`y!alınacak-rol rol` \n Alınacak Rolü Ayarlarsınız.')
        .addField('**__Kayıt Üye Rol__**','`y!üye-rol-ayarla @rol` \n Üye Rolü Ayarlarsınız')
        .addField('**__Kayıt Erkek Rol__**','`y!erkek-rol-ayarla @rol` \n Erkek Rolü Ayarlarsınız')
        .addField('**__Kayıt Kız Rol__**','`y!kız-rol-ayarla @rol` Kız Rolü Ayarlarsınız.')
        .addField('**__Kayıt Yetkili Rol__**','`y!yetkili-rol-ayarla @rol` Kayıt Yetkilisi Rolü Ayarlarsınız. ')
        .addField('**__Kayıt Kanal__**','`y!kayıt-kanal #kanal` Kayıt Odasını Ayarlarsınız.')
        .addField('**__Kayıt Kanal__**','`y!kayıt-log-kanal #kanal` Kayıt Odasını Ayarlarsınız.')
        .addField('**__Hoşglendin Kanal__**','`y!hg-kanal #kanal` Hoşgeldin Mesajı atılacak olan Odayı Ayarlarsınız.')
        .addField('**__Hoşglendin Mesaj__**','`y!hg-mesaj mesaj` Hoşgeldin Mesajı Ayarlarsınız.')
.setImage("https://cdn.discordapp.com/attachments/797899158807117867/798281669961842806/standard_22.gif")
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
.setThumbnail(client.user.avatarURL())
 message.channel.send(yardım) 
  };

exports.conf = {
  enabled: true,
  guildOnly: true,
 aliases: ['kayıt-yardım'],
  kategori: 'kayıt-yardım',
  permLevel: 0
};
exports.help = {
  name: 'kayıt-yardım',
  description: 'İstediğiniz kullanıcını bilgilerini gösterir.',
  usage: 'kayıt-yardım'
};