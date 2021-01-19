const Discord = require('discord.js');
const db = require('quick.db')

exports.run = function(client, message, args) {
  let kontrol =  db.fetch(`dil_${message.guild.id}`);
  if (kontrol == "TR_tr") {
  let sebep = args.slice(2).join(' ');
  	let yetkili = message.author
  let sahip = message.guild.members.get(args[0])
	let botisim = message.guild.members.get(args[1])
  let botrol = db.fetch(`${message.guild.id}_botrol`)
  let devrol = db.fetch(`${message.guild.id}_devrol`)
	  let log =  db.fetch(`${message.guild.id}_botlog`)
	let eklekanal = db.fetch(`${message.guild.id}_eklekanal`)
  let basvurulog =   db.fetch(`${message.guild.id}_basvurulog`)

    
    
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`:no_entry: Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  let embed2 = new Discord.RichEmbed()
  .setColor('#7f0000')
   .setDescription(` :x:  |**Maalesef!** ${botisim} **adlı botun reddedildi.** \n  📕 | **Sebep =** ${sebep} \n  🔏 | **Reddeden yetkili =** ${yetkili} `)
		
  let embed = new Discord.RichEmbed()
  .setColor('#7f0000')
   .setDescription(`  :x: | ${sahip} **adlı kişinin** ${botisim} **adlı botu reddedildi.** \n  📕 | **Sebep =** ${sebep} \n  🔏 | **Reddeden yetkili =** ${yetkili} `)
		
	if (!botisim) return message.channel.send(`:no_entry: Botun idsini yazmalısın.`).then(msg => msg.delete(10000))
  if (!sebep) return message.channel.send(`:no_entry: Botu neden onaylamadığını yazmalısın.`).then(msg => msg.delete(10000))
    if (!sahip) return message.channel.send(`:no_entry: Bot Sahibi id yazman lazım.`).then(msg => msg.delete(10000))
  message.delete()
  client.channels.get(log).send(embed);
    sahip.send(embed2)
} else {
  
  
    let sebep = args.slice(2).join(' ');
  	let yetkili = message.author
  let sahip = message.guild.members.get(args[0])
	let botisim = message.guild.members.get(args[1])
  let botrol = db.fetch(`${message.guild.id}_botrol`)
  let devrol = db.fetch(`${message.guild.id}_devrol`)
	  let log =  db.fetch(`${message.guild.id}_botlog`)
	let eklekanal = db.fetch(`${message.guild.id}_eklekanal`)
  let basvurulog =   db.fetch(`${message.guild.id}_basvurulog`)
  
  
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`You do not have permissions to use this command`);
  let embed2 = new Discord.RichEmbed()
  .setColor('#7f0000')
   .setDescription(` :x:  |**Unfortunately!** your bot ${botisim} was denied. \n  📕 | **Reason =** ${sebep} \n  🔏 | **Rejecter =** ${yetkili} `)
		
  let embed = new Discord.RichEmbed()
  .setColor('#7f0000')
   .setDescription(`  :x: | ${sahip}**'s bot **${botisim} **was denied.** \n  📕 | **Reason =** ${sebep} \n  🔏 | **Rejecter =** ${yetkili} `)
		
	if (!botisim) return message.channel.send(`:no_entry: You must specify the ID of the bot.`).then(msg => msg.delete(10000))
  if (!sebep) return message.channel.send(`:no_entry: You must specify the reason.`).then(msg => msg.delete(10000))
    if (!sahip) return message.channel.send(`:no_entry: You must specify the ID of the bot owner.`).then(msg => msg.delete(10000))
  message.delete()
  client.channels.get(log).send(embed);
    sahip.send(embed2)
}
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['deny'],
  permLevel: 0
};

exports.help = {
  name: 'reddet', 
  description: "Sunucuya eklenen botu reddeder.",
  usage: 'botreddet <bot ismi> - <sebep>'
};