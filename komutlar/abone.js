let Discord = require("discord.js")
let database = require("quick.db")
let ayarlar = require("../ayarlar.json")



exports.run = async(client, message, args) => {
let aboneyetkilisi = await database.fetch(`aboneyetkilisi.${message.guild.id}`)
let abonelog = await database.fetch(`abonelog.${message.guild.id}`)
let abonerol = await database.fetch(`abonerol.${message.guild.id}`)
  let abonekisi = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
if(!abonerol) return message.channel.send(`<a:yr_uyar:775360587650564127> **__Abone rolü ayarlanmamış!__**`)
  if(!abonelog) return message.channel.send(`<a:yr_uyar:775360587650564127> **__Abone log kanalı ayarlanmamış!__**`)
  if(!aboneyetkilisi) return message.channel.send(`<a:yr_uyar:775360587650564127> **__Abone yetkili rolü ayarlanmamış!__**`)
  let user = message.mentions.users.first()
  if(!message.member.roles.cache.has(aboneyetkilisi)) return message.channel.send(`Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`)
  
  if(!message.mentions.users.first()) return message.channel.send(`Bir Üye Etiketle!`)
  
  await(abonekisi.roles.add(abonerol))
  message.author.send(`<:yr_evet:793837194175447090> **__Kullanıcıya abone rolünü başarıyla verdin.__**`)
  const embed = new Discord.MessageEmbed()
  .setTitle(`Abone Rolü Verildi!`)
  .addField(`<a:squad:775385865492234260> Abone Rolünü Veren Kişi:`, `<@${message.author.id}>`, true)
  .addField(`<a:squad:775385865492234260> Abone Rolü Verilen Kişi:`, `${user}`, true)
  .addField(`<a:rainbowzincir:779439237061672981> Mesaj linki`,`[Tıkla](https://discord.com/channels/${message.guild.id}/${message.channel.id}/${message.id})`, true)
  .setColor(`RANDOM`)
  .setFooter(`${client.user.username} Abone Sistemi`)
  message.guild.channels.cache.get(abonelog).send(embed)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['abone'],
  perm: 0
}
exports.help = {
  name: 'a'
}

exports.play = {
  kullanım: '!abone-y-rol @rol',
  açıklama: 'Abone Yetkili Rolünü Ayarlarsınız',
  kategori: 'Abone'
}

//CodeWorld Yunus Emre