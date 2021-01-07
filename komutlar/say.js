const Discord = require("discord.js");

const mapping = {
  " ": "   ",
  "0": "<a:harsh_0:772201247851413534>",
  "1": "<a:harsh_1:772201312527056897>",
  "2": "<a:harsh_2:772201629172629534>",
  "3": "<a:harsh_03:772201637930205184>",
  "4": "<a:harsh_04:772201645660438560>",
  "5": "<a:harsh_05:772201657089654784>",
  "6": "<a:harsh_6:772201689410175027>",
  "7": "<a:harsh_07:772201698533310465>",
  "8": "<a:harsh_08:772201706737369119>",
  "9": "<a:harsh_9:772201716228816916>",
  "!": ":grey_exclamation:",
  "?": ":grey_question:",
  "#": ":hash:",
  "*": ":asterisk:"
};

"abcdefghijklmnopqrstuvwxyz".split("").forEach(c => {
  mapping[c] = mapping[c.toUpperCase()] = `:regional_indicator_${c}:`;
});
exports.run = function(client, message, args) {
  let voiceChannels = message.guild.channels.cache.filter(
    c => c.type === "voice"
  );
  let count = 0;
  for (const [id, voiceChannel] of voiceChannels)
    count += voiceChannel.members.size;
  let ses =
    "**Number of members in voices:** \n <a:harsh_tag3:771129991760969738> Sesli üye : " +
    `${count}`
      .split("")
      .map(c => mapping[c] || c)
      .join("");
  let toplam = message.guild.memberCount;
  let sunucu =
    "**Number of members on the server:  ** \n <a:harsh_tag3:771129991760969738> Toplam üye : " +
    `${toplam}`
      .split("")
      .map(c => mapping[c] || c)
      .join(" ");
  let taglıs = message.guild.roles.cache.filter(
    x => x.id === "772123226482540574"
  );
  let counts = 0;
  for (const [id, taglı] of taglıs) counts += taglı.members.size;
  let online =
    "**Number of tagged members:** \n <a:harsh_tag3:771129991760969738> Taglı üye : " +
    `${counts}`
      .split("")
      .map(c => mapping[c] || c)
      .join("");
  let booster = message.guild.roles.cache.filter(
    x => x.id === "771494043658092559"
  );
  let countss = 0;
  for (const [id, boostere] of booster) countss += boostere.members.size;
  let boosters =
    "**Number of booster members:** \n <a:harsh_tag3:771129991760969738> Booster : " +
    `${countss}`
      .split("")
      .map(c => mapping[c] || c)
      .join("");
  let kız = message.guild.roles.cache.filter(
    x => x.id === "771484414651138078"
  );
  let kızcıkks = 0;
  for (const [id, kızzz] of kız) kızcıkks += kızzz.members.size;
  let kızz =
    "**Number of female members:** \n <a:harsh_tag3:771129991760969738> Kadın üye : " +
    `${kızcıkks}`
      .split("")
      .map(c => mapping[c] || c)
      .join("");
  let erek = message.guild.roles.cache.filter(
    x => x.id === "771484411929559081"
  );
  let countssssss = 0;
  for (const [id, boostereeer] of erek) countssssss += boostereeer.members.size;
  let erkek =
    "**Number of male members:** \n <a:harsh_tag3:771129991760969738> Erkek üye : " +
    `${countssssss}`
      .split("")
      .map(c => mapping[c] || c)
      .join("");
  let onlinesayi = message.guild.members.cache.filter(
    only => only.presence.status != "offline"
  ).size;
  let aktif =
    "**Number of online people:** \n <a:harsh_tag3:771129991760969738> Online üye : " +
    `${onlinesayi}`
      .split("")
      .map(c => mapping[c] || c)
      .join(" ");
  const embed = new Discord.MessageEmbed()
    .setTitle("⍟ H A R SH")
    .setColor("BLACK")
    //.addField("Sunucudaki üye sayısı", message.guild.memberCount)
    .setDescription(
      "" +
        sunucu +
        "\n \n" +
        online +
        "\n \n" +
        ses +
        " \n \n" +
        boosters +
        " \n \n" +
        kızz +
        " \n \n" +
        erkek +
        " \n \n" +
        aktif +
        ""
    )
    .setFooter(
      "⍟ HARSH ❤️ DarkNighT",
      message.author.avatarURL({ dynamic: true })
    )
    .setThumbnail(message.author.avatarURL({ dynamic: true }));
  //.(online)
  message.channel.send(embed);
  /*message.channel.send('Online sayısı: ' + 
    `${onlinesayi}`
      .split("")
      .map(c => mapping[c] || c)
      .join(" ")
  );*/
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["onlinesayi"],
  permLevel: 0
};

exports.help = {
  name: "say",
  usage: "Sunucudaki Online Kişileri Sayar",
  desscription: "24say"
};
