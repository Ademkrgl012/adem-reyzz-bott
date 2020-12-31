const Discord = require('discord.js')
const db = require('quick.db')
 
exports.run = async (client ,message, args) =>{
  
    if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(` Bu komudu kullanabilmek için "Sunucuyu Yönet" yetkisine sahip olman gerek.`)
if(args[0] === 'aktif') {
    db.set(`${message.guild.id}.kufur`, true)
    message.channel.send('<:yr_evet:793837194175447090> **Küfür Engel Başarıyla Açıldı.**')
  return
}
if (args[0] === 'deaktif') {
  db.delete(`${message.guild.id}.kufur`)
message.channel.send('<:yr_hayr:793837203478020127> Başarılı Şekilde `Deaktif` Edildi')
return
}
  message.channel.send('**Lüten y!küfür aktif` yada `y!küfür deaktif` Yazın!**')
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['küfürengel','küfür-engel','küfür'],
 permLevel: 0
};
 
exports.help = {
 name: 'küfür',
 description: 'Davet Log Kanalını Belirler',
 usage: 'küfür-engel'
};
 