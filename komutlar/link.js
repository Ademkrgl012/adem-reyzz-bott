const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {

  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`**Bu komudu kullanabilmek için "__Sunucuyu Yönet__" yetkisine sahip olman gerek.**`)
  if (!args[0]) return message.channel.send(`:no_entry: **Reklam Filtresini Ayarlamak İçin \`y!reklam-engel aç\` | Kapatmak İstiyorsanız \`y!reklam-engel kapat\` Yazabilirsiniz**`)
  if (args[0] !== 'aç' && args[0] !== 'kapat') return message.channel.send(`:no_entry: **Reklam Filtresini Ayarlamak İçin \`y!reklam-engel aç\` | Kapatmak İstiyorsanız \`y!reklam-engel kapat\` Yazabilirsiniz**`)

    if (args[0] == 'aç') {
    db.set(`reklamFiltre_${message.guild.id}`, 'acik')
    let i = await db.fetch(`reklamFiltre_${message.guild.id}`)
  message.channel.send(`<:yr_evet:793837194175447090> **Reklam Engel başarıyla açıldı.**`)    
     
  } 

  if (args[0] == 'kapat') {
    
    let üye = await db.fetch(`reklamFiltre_${message.guild.id}`)
    if (!üye) return message.channel.send(`**__Reklam filtresini açtığına emin misin?__**`)
    
    
    db.delete(`reklamFiltre_${message.guild.id}`)
    
    message.channel.send(`<:yr_hayr:793837203478020127> **Reklam Engel başarıyla açıldı.**`)
  }
 
};


exports.conf = {
 enabled: true,
 guildOnly: false,
  aliases: ['link','reklam'],
 permLevel: 0
};

exports.help = {
 name: 'reklam-engel',
 description: 'reklamm',
 usage: 'gkanal'
};