const Discord = require("discord.js");
exports.run = async (client, message, args) => {

  if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(`:x: Yeterli yetkiye sahip değilsin.`)

 
  let member = message.mentions.users.first();
  if (!member) return message.channel.send(`:x: Lütfen Bir Kişi belirt!`)
 
  const embed = new Discord.MessageEmbed()
    .setColor("BLACK")
    .setDescription(`${member} Adlı kişinin sunucudan atılmasını onaylıyor musunuz?`)
  message.channel.send(embed).then(async function(sentEmbed) {
    const emojiArray = ["✅"];
    const filter = (reaction, user) =>
      emojiArray.includes(reaction.emoji.name) && user.id === message.author.id;
    await sentEmbed.react(emojiArray[0]).catch(function() {});
    var reactions = sentEmbed.createReactionCollector(filter, {
      time: 30000
    });
    reactions.on("end", () => sentEmbed.edit("Kick İşlemi iptal oldu!"));
    reactions.on("collect", async function(reaction) {
      if (reaction.emoji.name === "✅") {
        message.channel.send(`İşlem Başarılı! ${member} Adlı Kişi başarılı bir şekilde sunucudan atıldı!`)
        message.guild.member(member).kick();
      }
    });
  });
};
 
exports.conf = {
  aliases: [],
  permLevel: 0,
  enabled: true,
  guildOnly: true,
  kategori: "moderasyon"
};
 
exports.help = {
  name: "kick",
  description: "",
  usage: ""
};
