const Discord = require("discord.js");

exports.run = async (app, message, client) => {
  const asf = new Discord.MessageEmbed()

    .setColor("RANDOM")
    .setDescription(
      "<a:yrnex_loading:794118093814104064> Ping Hesaplanıyor..."
    );

  let start = Date.now();
  let mesaj = await message.channel.send(asf);
  let diff = Date.now() - start;
  let API = app.ws.ping.toFixed(2);

  setInterval(() => {
    const only = new Discord.MessageEmbed()
      .setDescription(
        `<a:yrnex_discord:794118212693917718> Mesaj Gecikme Süresi ; **${diff}Ms** \n\n<a:yrnex_bulut:794118277705629696> Bot Gecikme Süresi ; **${API}Ms**`
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
