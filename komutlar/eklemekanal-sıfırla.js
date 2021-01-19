const Discord = require('discord.js')
const client = new Discord.Client()
const db = require('quick.db')

exports.run = async (client, message, args) => {
  let kontrol =  db.fetch(`dil_${message.guild.id}`);
  if (kontrol == "TR_tr") {
    if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send('Bu komutu kullanmak için gerekli yetkiye sahip değilsin')    
        if(!db.has(`${message.guild.id}_eklekanal`)) return message.channel.send('Zaten bot ekleme  kanalı ayarlanmamış');
            db.delete(`${message.guild.id}_eklekanal`)
            message.channel.send('Bot Ekleme Kanalı kanalı başarılı bir şekilde sıfırlandı')

} else {
   if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send('You do not have permissions to use this command')    
        if(!db.has(`${message.guild.id}_eklekanal`)) return message.channel.send('Bot adding channel is not already set');
            db.delete(`${message.guild.id}_eklekanal`)
            message.channel.send('Bot adding channel succesfully has been reset')
}
}
exports.conf = {
    aliases: ["addchannel-reset"]
}
exports.help = {
    name: "eklemekanal-sıfırla"
}