const Discord = require("discord.js");

exports.run = async (bot, message, args) => {

    let replies = ["https://tenor.com/view/hit-punch-fight-face-viewer-gif-7762551", "https://tenor.com/view/dean-winchester-punch-mad-angry-gif-13850258", "https://tenor.com/view/hulk-thor-punch-hit-nope-gif-7559294", "https://tenor.com/view/kemal-sunal-vur-yumruk-one-puc-punch-gif-16087056", "https://tenor.com/view/animated-girl-punch-gif-10694340", "https://tenor.com/view/zdupy-punch-fight-gif-10214339", "https://tenor.com/view/face-punch-punch-minions-fine-happy-gif-4902917", "https://tenor.com/view/knockout-knockedout-punch-punched-punching-gif-4902914", "https://tenor.com/view/punch-attack-knock-out-girl-power-angry-gif-10521040", "https://tenor.com/view/naruto-sakura-punch-gif-11395420"];

   let result = Math.floor((Math.random() * replies.length));
   let member = message.mentions.members.first()
   if(!member)return message.channel.send(':no_entry_sign: Birini Etiketle!')

    let gifembed = new Discord.RichEmbed()
        .setDescription(`${message.author} Tarafından ${member}'a Yumruk Atıldı!`)
        .setColor("#FF69B4")
        .setFooter(`Adem Reyzz`, message.author.avatarURL)
        .setImage(replies[result]);

    message.channel.send(gifembed);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["yumruk"],
    permLevel: 0
   };
   
  exports.help = {
    name: 'yumruk-at',
    description: 'Etiketlediniz Kisiye Yumruk Atar.',
    usage: 'yumruk-at'
   }
