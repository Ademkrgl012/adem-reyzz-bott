const  Discord = require("discord.js"); 
const client = new Discord.Client();
const moment = require("moment");
require("moment-duration-format");

module.exports.run = async(client, message, args) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");

    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('<a:sarey:765533152248594484> İstatistik;')
    .addField('<a:sarey:765533152248594484> Gecikme: ', client.ws.ping + 'ms')
    .addField('<a:sarey:765533152248594484> Çalışma Süresi: ', `${duration}`)
    .addField('<a:sarey:765533152248594484> Kullanıcılar:', client.users.cache.size)
    .addField('<a:sarey:765533152248594484> Kanallar:', client.channels.cache.size)
    .addField('<a:sarey:765533152248594484> Sunucular:', client.guilds.cache.size)
    .addField('<a:sarey:765533152248594484> Bellek kullanımı:', (process.memoryUsage().heapUsed / 2048 / 2048).toFixed(2))
    .addField('<a:sarey:765533152248594484> Kütüphanesi;', `Discord.js`)
    .addField(`<a:sarey:765533152248594484> Discord.js sürümü:`, Discord.version)
    .setTimestamp()
    message.channel.send(embed);
}
exports.conf = {
  enabled: true,
    guildOnly: true,
  aliases: ['istatistik', 'botbilgi', 'bot-bilgi','i'],
  permLevel: 0
};

exports.help = {
  name: 'bilgi-bot',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'istatistik [bot durumunu yazar]'
};