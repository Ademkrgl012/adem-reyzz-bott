const Discord = require('discord.js')
const client = new Discord.Client()
const db = require('quick.db')

exports.run = async (client, message, args) => {
  let kontrol =  db.fetch(`dil_${message.guild.id}`);
  if (kontrol == "TR_tr") {
    if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send('Bu komutu kullanmak için gerekli yetkiye sahip değilsin')    
  

         var devrol = message.mentions.roles.first()
        if(!devrol) return message.channel.send('Bir developer rolü etiketlemediniz'); 
            db.set(`${message.guild.id}_devrol`, devrol.id)
            message.channel.send(`Developer rol kanal başarılı bir şekilde ${devrol} olarak ayarlandı`)

} else {
   if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send('You do not have permissions to use this command')    
  

         var devrol = message.mentions.roles.first()
        if(!devrol) return message.channel.send('You must specify a Developer role'); 
            db.set(`${message.guild.id}_devrol`, devrol.id)
            message.channel.send(`Bot role  succesfully set to ${devrol}`)
}
}
exports.conf = {
    aliases: ["devrole"]
}
exports.help = {
    name: "devrol-ayarla"
}