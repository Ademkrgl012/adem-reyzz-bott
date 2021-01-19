const Discord = require('discord.js')
const client = new Discord.Client()
const db = require('quick.db')

exports.run = async (client, message, args) => {
   let kontrol =  db.fetch(`dil_${message.guild.id}`);
  if (kontrol == "TR_tr") {
    if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send('Bu komutu kullanmak için gerekli yetkiye sahip değilsin')    
  

        var eklekanal = message.mentions.channels.first()
        if(!eklekanal) return message.channel.send('Bir bot ekleme kanalı girmelisin')
        db.set(`${message.guild.id}_eklekanal`, eklekanal.id)
        message.channel.send(`Bot ekleme kanalı başarılı bir şekilde ${eklekanal} olarak ayarlandı`)

} else {
      if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send('You do not have permissions to use this command')    
  

        var eklekanal = message.mentions.channels.first()
        if(!eklekanal) return message.channel.send('You must specify a bot adding channel')
        db.set(`${message.guild.id}_eklekanal`, eklekanal.id)
        message.channel.send(`Bot adding channel succesfully set to ${eklekanal}`)

}
} 
exports.conf = {
    aliases: ["addchannel"]
}
exports.help = {
    name: "eklemekanal-ayarla"
}