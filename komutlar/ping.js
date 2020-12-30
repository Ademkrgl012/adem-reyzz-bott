const Discord = require("discord.js");

exports.run = async (app, message, client) => {
  const asf = new Discord.MessageEmbed()

    .setColor("RED")
    .setDescription("<a:loading:776390566665650176> Ping Hesaplanıyor...");

  let start = Date.now();
  let mesaj = await message.channel.send(asf);
  let diff = Date.now() - start;
  let API = app.ws.ping.toFixed(2);

  setInterval(() => {
    const only = new Discord.MessageEmbed()
      .setDescription(
        `  Mesaj Gecikme Süresi ; **${diff}Ms** \n\n <a:hypesquad2:775698163842416650> Bot Gecikme Süresi ; **${API}Ms**`
      )
      .setColor("GREEN");

    mesaj.edit(only);
  }, 5000);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ping"],
  permLevel: 0
};

exports.help = {
  name: "ping",
  description: "asf",
  usage: "ping"
};
