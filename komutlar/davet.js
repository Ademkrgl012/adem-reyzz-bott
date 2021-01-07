const Discord = require("discord.js");

exports.run = (client, message, args) => {
  const davet = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("İşte Davet Linklerim <a:yrnex_hypes:794222389584068618>")
    .setDescription(
      "<a:yrnex_partner:794222684233138197>  [__**Davet Et**__](https://discord.com/oauth2/authorize?client_id=787328444954050570&permissions=8&scope=bot) \n <a:yrnex_partner:794222684233138197>  [__**Destek Sunucum**__](https://discord.gg/RZheu3F2bM)"
    );
  message.channel.send(davet);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "davet",
  description: "",
  usage: ""
};




