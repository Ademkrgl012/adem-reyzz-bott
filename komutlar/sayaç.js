const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {
 
  let sayi = args[0];
  let kanal = message.mentions.channels.first();
 
  if (!sayi) return message.reply(':no: Lütfen sayı belirtin!')
  if (!kanal) return message.reply(':no: Lütfen kanal etiketleyin!')
 
  db.set(`sayac_${message.guild.id}`, sayi);
  db.set(`sayacK_${message.guild.id}`, kanal.id);
 
  message.channel.send(`Sayaç **${sayi}** Kanalı ${kanal} olarak ayarlandı :yes:`)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sayaç-ayarla"],
  permLevel: 3
}
exports.help = {
  name: "sayaç",
  description: "Sayaç ayarlama komutudur.",
  usage: "sayaç <sayi> <#kanal>"
}