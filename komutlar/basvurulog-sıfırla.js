const Discord = require('discord.js')
const client = new Discord.Client()
const db = require('quick.db')

exports.run = async (client, message, args) => {
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
  if (kontrol == "TR_tr") {
    if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send('Bu komutu kullanmak için gerekli yetkiye sahip değilsin')    
      if(!db.has(`${message.guild.id}_basvurulog`)) return message.channel.send('Zaten log kanalı ayarlanmamış');
            db.delete(`${message.guild.id}_basvurulog`)
            message.channel.send('Başvuru log kanalı başarılı bir şekilde sıfırlandı')
  }
  else {
  
    if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send('You do not have permissions to use this command')    
      if(!db.has(`${message.guild.id}_basvurulog`)) return message.channel.send('App Log channel is not already set');
            db.delete(`${message.guild.id}_basvurulog`)
            message.channel.send('App Log succesfully has been reset')
  }
}
exports.conf = {
    aliases: ["applog-reset"]
}
exports.help = {
    name: "basvurulog-sıfırla"
}