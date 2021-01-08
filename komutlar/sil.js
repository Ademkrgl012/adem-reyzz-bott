const Discord = require('discord.js');

exports.run = async(yashinu, message, args) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`Bu komutu kullanabilmek için "MESAJLARI YÖNET" iznine sahip olmalısın!`);
  if (!args[0] || isNaN(args[0])) return message.reply(`Temizlenecek mesaj miktarını belirtmelisin! (İstediğin kadar)`);
  message.delete();
  let rexussayi = Number(args[0]);
  let rexussilinen = 0;
  for (var i = 0; i < (Math.floor(rexussayi/100)); i++) {
   message.channel.bulkDelete(100).then(r => rexussilinen+=r.size);
    rexussayi = rexussayi-100;
  };
  if (rexussayi > 0)  message.channel.bulkDelete(rexussayi).then(r => rexussilinen+=r.size);
  message.channel.send(` **\`\`${args[0]}\`\` Adet Mesaj Silindi.** <:evet:791986525742563329>`);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["temizle", "sil"],
  permLevel: 0
};

exports.help = { 
  name: 'temizle', 
  description: 'Belirtilen miktarda mesajı temizler. (Sınırsız)',
  usage: 'temizle <miktar>',
  kategori: 'yetkili'
};

const Discord = require('discord.js');
const data = require('quick.db');


exports.run = async (client, message, args) => {
if(!message.member.permissions.has('MANAGE_MESSAGES')) return message.channel.send(new Discord.MessageEmbed().setTitle('**`Mesajları Yönet` İzni sende yok.**'));
if(!args[0]) return message.channel.send(new Discord.MessageEmbed().setTitle('Silinecek miktar giriniz.'));
if(args[0] > 100) return message.channel.send(new Discord.MessageEmbed().setTitle('Mesaj silme limiti `100` üzeri mesajı aynı anda silemem.'));
message.channel.bulkDelete(args[0]);
return message.channel.send(new Discord.MessageEmbed().setTitle('Tamamdır Patron! '+`${args[0]}`+' adet mesaj silindi.')).then(m => m.delete({timeout: 5000}));
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'sil'
};