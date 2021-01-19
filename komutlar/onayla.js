const Discord = require('discord.js');
const db  = require('quick.db')

exports.run = function(client, message, args) {
  let kontrol =  db.fetch(`dil_${message.guild.id}`);
  if (kontrol == "TR_tr") {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`:no_entry: Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`); 
  let yetkili = message.author
  let sahip = message.guild.members.get(args[0])
	let botisim = message.guild.members.get(args[1])
  let botrol = db.fetch(`${message.guild.id}_botrol`)
  let devrol = db.fetch(`${message.guild.id}_devrol`)
	  let log =  db.fetch(`${message.guild.id}_botlog`)
	let eklekanal = db.fetch(`${message.guild.id}_eklekanal`)
  let basvurulog =   db.fetch(`${message.guild.id}_basvurulog`)

	if (!botisim) return message.channel.send(`:no_entry: Botun idsini yazmalısın.`).then(msg => msg.delete(10000))
  if(!sahip) return message.reply("Bir sahip id girmen gerekiyor")
  message.delete()
    sahip.addRole(devrol)
  botisim.addRole(botrol)
  let embedd = new Discord.RichEmbed()
  .setDescription(` :white_check_mark: | **Tebrikler!** ${botisim} **adlı botun onaylandı.Developer permin verildi** \n\n  🔏 | **Onaylayan yetkili =** ${yetkili} `)
  sahip.send(embedd)
   let embed2 = new Discord.RichEmbed()
   .setColor('#5fbf00')
   .setDescription(` :white_check_mark: | ${sahip} **adlı kişinin** ${botisim} **adlı botu onaylandı.** \n\n  🔏 | **Onaylayan yetkili =** ${yetkili} `)
		client.channels.get(log).send(embed2)
		
    
  
    
} else {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`You do not have permissions to use this command`); 
  let yetkili = message.author
  let sahip = message.guild.members.get(args[0])
	let botisim = message.guild.members.get(args[1])
  let botrol = db.fetch(`${message.guild.id}_botrol`)
  let devrol = db.fetch(`${message.guild.id}_devrol`)
	  let log =  db.fetch(`${message.guild.id}_botlog`)
	let eklekanal = db.fetch(`${message.guild.id}_eklekanal`)
  let basvurulog =   db.fetch(`${message.guild.id}_basvurulog`)

	if (!botisim) return message.channel.send(`:no_entry:  You must specify the ID of the bot.`).then(msg => msg.delete(10000))
  if(!sahip) return message.reply(" :no_entry: You must specify the owner ID of the bot")
  message.delete()
    sahip.addRole(devrol)
  botisim.addRole(botrol)
  let embedd = new Discord.RichEmbed()
  .setDescription(` :white_check_mark: | **Congratulations!** your bot ${botisim} was approved ** ** \n\n  🔏 | **Approver  =** ${yetkili} `)
  sahip.send(embedd)
   let embed2 = new Discord.RichEmbed()
   .setColor('#5fbf00')
   .setDescription(` :white_check_mark: | **${sahip}**'s bot**${botisim} ** was  approved.** \n\n  🔏 | **Approver =** ${yetkili} `)
		client.channels.get(log).send(embed2)
}
  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['approve'],
  permLevel: 0
};

exports.help = {
  name: 'onayla', 
  description: "Sunucuya eklenen botu onaylar.",
  usage: 'botonayla <bot ismi>'
};6