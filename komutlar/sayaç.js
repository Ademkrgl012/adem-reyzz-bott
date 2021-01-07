const Discord = require('discord.js')

exports.run = async (client, message, args, level) => {
  message.delete(3000)
  try {
    
    const embed = new Discord.MessageEmbed()
    .setTitle(`Hollywood bot Sayaç komut desteği -  <a:hollyayarlar:755532338716344475>`)
    .setFooter(message.author.username)
    .setColor('RANDOM')
    .setImage('https://i.gyazo.com/82a43b6fe23592395d5c3aad4f7790b1.gif')
    .setTimestamp()
    .setFooter(message.author.username , message.author.avatarURL)
    .setFooter("Sayaç komutunu kullanabilmek için. İlk önce rolü üstlere alınız. Ardından h!sayaç-ayarla 50 #sayaç yazarak aktif edebilirsiniz.")

    return message.channel.send({embed});
    
    message.channel.send();
  } catch (err) {
    message.channel.send('Daha Sonra Tekrar Deneyin!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: [],
  guildOnly: false,
  permLevel: 0
};

exports.help = {
  name: 'sayaç',
  description: 'Bottaki Komut Sayısını Gösterir.',
  usage: 'sayaç'
};