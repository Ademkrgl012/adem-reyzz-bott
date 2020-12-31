const  Discord = require("discord.js"); 

exports.run = (client, message, args) => {

  const davet = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle("İşte Davet Linklerim <a:seksiemojiymishih:788680445230972950>")
  .setDescription("[__**Davet Et**__](https://discord.com/oauth2/authorize?client_id=787328444954050570&permissions=8&scope=bot) \n [__**Destek Sunucusu**__](ttps://discord.gg/RZheu3F2bM)
  message.channel.send(davet)
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: '',
  usage: ''
};