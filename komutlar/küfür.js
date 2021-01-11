const Discord = require('discord.js')
const db = require('quick.db')//dawn

exports.run = async (client ,message, args) =>{
    if(!message.member.hasPermission('BAN_MEMBERS')) return //Burayı düzenleyebilirsiniz! İstediğiniz perme göre!
if(args[0] === 'aktif' || args[0] === "açık" || args[0] === "aç") {
    db.set(`${message.guild.id}.kufur`, true)
    message.channel.send('Başarılı Şekilde `Aktif` Edildi.')
  return
}
if (args[0] === 'deaktif' || args[0] === "kapat" || args[0] === "kapalı") {
  db.delete(`${message.guild.id}.kufur`)
message.channel.send('Başarılı Şekilde `Deaktif` Edildi')
return
}
  message.channel.send('Lüten `Aktif` yada `Deaktif` Yazın!')
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['küfür' , 'küfürfiltresi', 'küfürengel'],
 permLevel: 0
};

exports.help = {
 name: 'küfür-ayarla',//CCD
 description: 'Küfür Filtresini açar/kapar',
 usage: '!küfürfiltresi  '
};