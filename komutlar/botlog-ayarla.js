const Discord = require('discord.js')
const client = new Discord.Client()
const db = require('quick.db')

exports.run = async (client, message, args) => {
   let kontrol =  db.fetch(`dil_${message.guild.id}`);
  if (kontrol == "TR_tr") {
    if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send('Bu komutu kullanmak için gerekli yetkiye sahip değilsin')    
  

       var botlog = message.mentions.channels.first()
        if(!botlog) return message.channel.send('Bir log kanalı etiketlemediniz');
            db.set(`${message.guild.id}_botlog`, botlog.id)
            message.channel.send(`Bot log kanal başarılı bir şekilde ${botlog} olarak ayarlandı`)

} else {
    if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send('You do not have permissions to use this command')
     var botlog = message.mentions.channels.first()
        if(!botlog) return message.channel.send('You must specify a logging channel');
            db.set(`${message.guild.id}_botlog`, botlog.id)
            message.channel.send(`Channel succesfully set to ${botlog}`)
}
  
  
}
exports.conf = {
    aliases: ["log"]
}
exports.help = {
    name: "botlog-ayarla"
}