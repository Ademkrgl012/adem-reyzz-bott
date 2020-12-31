const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let güvenlik = message.guild.verificationLevel;
  if (güvenlik === "NONE") güvenlik = "Yok";
  if (güvenlik === "LOW") güvenlik = "Düşük";
  if (güvenlik === "MEDIUM") güvenlik = "Orta";
  if (güvenlik === "HIGH") güvenlik = "Yüksek";
  if (güvenlik === "VERY_HIGH") güvenlik = " En Yüksek";
  const voiceChannels = message.guild.channels.cache.filter(
    c => c.type === "voice"
  );
  let count = 0;
  let guild = message.guild;
  let botlar = message.guild.members.cache.filter(m => m.user.bot).size;
  let textChannels = message.guild.channels.cache.filter(m => m.type == "text")
    .size;
  for (const [id, voiceChannel] of voiceChannels)
    count += voiceChannel.members.size;
  let çevrimiçi = message.guild.members.cache.filter(
    m => !m.user.bot && m.user.presence.status !== "offline"
  ).size;
  const embed = new Discord.MessageEmbed()
    .setColor("BLACK")
    .setThumbnail(
      `https://media.discordapp.net/attachments/761099716993613824/771419350828843059/gif_3.gif?width=115&height=115`
    )

    .addField(
      `👥  **__Sunucudaki Toplam Üye Sayısı__**`,
      `**\`\`\`${message.guild.memberCount}\`\`\`**`
    )

    .addField(`🎧  **__Seslideki Üye Sayısı__**`, `**\`\`\`${count}\`\`\`**`)

    .addField(`🔰  **__Güvenlik Seviyesi__**`, `**\`\`\`${güvenlik}\`\`\`**`)
    .addField(`💬  **__Yazı Kanalları__**`, `» **${textChannels}**`)

    .addField(`🎶  **__Ses Kanalları__**`, `» **${voiceChannels.size}**`)

    .addField(
      `<a:scroll:771416646547406918>  **__Roller__**`,
      `»  **${message.guild.roles.cache.size}**`
    )

    .addField(
      `<a:scroll:771416646547406918>  **__Emojiler__**`,
      `»  **${message.guild.emojis.cache.size}**`
    )

    .addField(
      `📊  **__Boost Seviyesi__**`,
      `»  **${message.guild.premiumTier}/3**`
    )

    .addField(
      `🚀  **__Boost Sayısı__**`,
      `»  **${message.guild.premiumSubscriptionCount}**`
    )

    .setTitle(
      `<a:small_orange_diamond:771414619776352277> ${message.author.tag} - Tarafından istendi.`
    )
    .setImage(
      "https://media.discordapp.net/attachments/697145772801785876/716671769355747348/1.gif"
    )
    .setFooter(`© 2020 Yrnex Tüm Hakları Saklıdır.`, client.user.avatarURL);
  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["say"],
  permLevel: 0
};

exports.help = {
  name: "say",
  description: "Say",
  usage: "say"
};
