const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const db = require("quick.db");
const prefix = ayarlar;
exports.run = (client, message, args) => {
  
    exports.run = async(client, message, args) => {

    let p = args[0];
     let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  let pythonic = args.slice(0).join(' ');
      

const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#27167A')
    .setTitle("Go to Yrnex's website")
    .setURL("http://")
	.setAuthor('Yrnex', 'https://cdn.discordapp.com/attachments/781872196654071819/802273053341777970/560c982e1dbebadfa7ede412a8bc21d5.png')
	.setDescription('İşinize Yarıyabilicek Efsane Komutların Hepsi Bu Botda !')
	.addFields(
		{ name: 'Eğlence komutları <:radios:753901880278515782>', value: `${prefix}eğlence`, inline: true },
		{ name: 'Kayıt komutları <:4925_blurpednewsletter:753904910814412819>', value: `${prefix}kayıt-yardım`, inline: true },
		{ name: 'Abone komutları <:VectorBox:736227127665360996>', value: `${prefix}abone-yardım`, inline: true },
		{ name: 'Mod komutları <:botcommands:754445971127140475>', value: `${prefix}moderasyon`, inline: true },
    { name: 'Kullanıcı Komutları <:moderation:754452673692041248>', value: `${prefix}kullanıcı`, inline: true },

	)
	.setImage('https://cdn.discordapp.com/attachments/797899158807117867/798281669961842806/standard_22.gif')
	.setTimestamp()
	.setFooter('Yrnex 2021', 'https://cdn.discordapp.com/attachments/781872196654071819/802273053341777970/560c982e1dbebadfa7ede412a8bc21d5.png');

message.channel.send(exampleEmbed);
};
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım'],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  category: "yardım",
  description: "yardım"
};