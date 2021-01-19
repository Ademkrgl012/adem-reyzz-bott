const Discord = require('discord.js')
const client = new Discord.Client()
const db = require('quick.db')

exports.run = async (client, message, args) => {
    let kontrol = await db.fetch(`dil_${message.guild.id}`);
  if (kontrol == "TR_tr") {
    if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send('Bu komutu kullanmak için gerekli yetkiye sahip değilsin')    
    var basvurulog = message.mentions.channels.first()
        if(!basvurulog) return message.channel.send('Bir başvuru log kanalı etiketlemediniz'); 
            db.set(`${message.guild.id}_basvurulog`, basvurulog.id)
            message.channel.send(`Bot log kanal başarılı bir şekilde ${basvurulog} olarak ayarlandı`)
  } else {
      if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send('You do not have permissions to use this command')    
    var basvurulog = message.mentions.channels.first()
        if(!basvurulog) return message.channel.send('Specify a log channel'); 
            db.set(`${message.guild.id}_basvurulog`, basvurulog.id)
            message.channel.send(`App logging channel succesfully set to ${basvurulog} `)
  }
         

}
exports.conf = {
    aliases: ["applog"]
}
exports.help = {
    name: "basvurulog-ayarla"
}