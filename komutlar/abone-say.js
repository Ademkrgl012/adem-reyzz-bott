const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {
  if(!message.member.roles.cache.has(aboneyetkilisi)) 
  return message.channel.send(`Bu komutu kullanabilmek için \`Abone Yetkilisi\` olmalısınız.`);

  let kişi = message.mentions.users.first();
  if(!kişi) {
   
    let toplam = await db.fetch(`merziki_${message.author.id}`) || '0'

    let kayıtlılar = new Discord.MessageEmbed()
      .setColor('#7f00ff')
      .setDescription(`Bilginiz:\n\n`)
      .addField('Abone Sayısı:', toplam)
    message.channel.send(kayıtlılar)
  }
    if(kişi) { 

    let toplam = await db.fetch(`merziki_${kişi.id}`) || '0'
    let kayıtlılar = new Discord.MessageEmbed()
      .setColor('#7f00ff') 
      .setDescription(`**${kişi.username} kişisinin bilgileri**\n\n`)
      .addField('Abone Sayısı:', toplam)
    message.channel.send(kayıtlılar)
  } 
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['abone-say'],
  permLevel: 0
}
exports.help = {
  name: 'abone-say',
  description: "Abone Say",
  usage: 'abone-say <nick>'
}