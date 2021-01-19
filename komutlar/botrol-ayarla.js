const Discord = require('discord.js')
const client = new Discord.Client()
const db = require('quick.db')

exports.run = async (client, message, args) => {
  let kontrol =  db.fetch(`dil_${message.guild.id}`);
  if (kontrol == "TR_tr") {
    if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send('Bu komutu kullanmak için gerekli yetkiye sahip değilsin')    
  

        var botrol = message.mentions.roles.first()
        if(!botrol) return message.channel.send('Bir bot rolü etiketlemediniz'); 
            db.set(`${message.guild.id}_botrol`, botrol.id)
            message.channel.send(`Bot rol kanal başarılı bir şekilde ${botrol} olarak ayarlandı`)

} else {
   if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send('You do not have permissions to use this command')    
  

        var botrol = message.mentions.roles.first()
        if(!botrol) return message.channel.send('You must specify a bot role'); 
            db.set(`${message.guild.id}_botrol`, botrol.id)
            message.channel.send(`Bot role  succesfully set to ${botrol} `)
}
}
exports.conf = {
    aliases: ["botrole"]
}
exports.help = {
    name: "botrol-ayarla"
}