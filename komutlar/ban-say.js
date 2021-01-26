const Discord = require('discord.js');

exports.run = (client, message, args) => {
 let guild = message.guild;

    guild.fetchBans()
        .then(bans => message.channel.send(` > <a:yr_ban:779007761655660605>  **Sunucunuzda ${bans.size} banlanmış üye bulunmaktadır!**   `))
        .catch(console.error);

}

exports.conf = {
    enabled: true,
    runIn: ["bansay"],
    aliases: ['ban-say'],
    permLevel: 0
  };

  exports.help = {
    name: "bansay",
    description: "Sunucudan banlanan kişilerin sayısını gösterir",
    usage: "bansay"
  }
///////////YrnexCreative