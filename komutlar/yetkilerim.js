const Discord = require('discord.js');

exports.run = (client, message, args) => {

  let user = message.mentions.members.first()

  if(!user) user = message.member
  
let x;
    let x2;
    let x3;
    let x4;
    let x5;
    let x6;
    let x7;
    let x8;
    let x9;
    let x10;
    let x11;
    
    //yönetici
    if (user.hasPermission("ADMINISTRATOR")) x = "<:yrnex_mcevt:798278281638969345>"
    if (!user.hasPermission("ADMINISTRATOR")) x = "<:yrnex_mchyr:798278344059387904>"
    
    //Denetim kaydı
    if (user.hasPermission("VIEW_AUDIT_LOG")) x2 = "<:yrnex_mcevt:798278281638969345>"
    if (!user.hasPermission("VIEW_AUDIT_LOG")) x2 = "<:yrnex_mchyr:798278344059387904>"
    
    //Sunucuyu yönet
    if (user.hasPermission("MANAGE_GUILD")) x3 = "<:yrnex_mcevt:798278281638969345>"
    if (!user.hasPermission("MANAGE_GUILD")) x3 = "<:yrnex_mchyr:798278344059387904>"
    
    //Rolleri yönet
    if (user.hasPermission("MANAGE_ROLES")) x4 = "<:yrnex_mcevt:798278281638969345>"
    if (!user.hasPermission("MANAGE_ROLES")) x4 = "<:yrnex_mchyr:798278344059387904>"
    
    //Kanalları yönet
    if (user.hasPermission("MANAGE_CHANNELS")) x5 = "<:yrnex_mcevt:798278281638969345>"
    if (!user.hasPermission("MANAGE_CHANNELS")) x5 = "<:yrnex_mchyr:798278344059387904>"
    
    //üyeleri at
    if (user.hasPermission("KICK_MEMBERS")) x6 = "<:yrnex_mcevt:798278281638969345>"
    if (!user.hasPermission("KICK_MEMBERS")) x6 = "<:yrnex_mchyr:798278344059387904>"
    
    //üyeleri yasakla
    if (user.hasPermission("BAN_MEMBERS")) x7 = "<:yrnex_mcevt:798278281638969345>"
    if (!user.hasPermission("BAN_MEMBERS")) x7 = "<:yrnex_mchyr:798278344059387904>"
    
    //mesajları yönet
    if (user.hasPermission("MANAGE_MESSAGES")) x8 = "<:yrnex_mcevt:798278281638969345>"
    if (!user.hasPermission("MANAGE_MESSAGES")) x8 = "<:yrnex_mchyr:798278344059387904>"
    
    //kullanıcı adlarını yönet
    if (user.hasPermission("MANAGE_NICKNAMES")) x9 = "<:yrnex_mcevt:798278281638969345>"
    if (!user.hasPermission("MANAGE_NICKNAMES")) x9 = "<:yrnex_mchyr:798278344059387904>"
    
    //emojileri yönet
    if (user.hasPermission("MANAGE_EMOJIS")) x10 = "<:yrnex_mcevt:798278281638969345>"
    if (!user.hasPermission("MANAGE_EMOJIS")) x10 = "<:yrnex_mchyr:798278344059387904>"

    
if (user.hasPermission("MANAGE_WEBHOOKS")) x11 = "<:yrnex_mcevt:798278281638969345>"
    if (!user.hasPermission("MANAGE_WEBHOOKS")) x11 = "<:yrnex_mchyr:798278344059387904>"
      let embed = new Discord.MessageEmbed()

.setColor("RED")
.setTitle(`${user.user.tag}'ın Yetkileri:`)
.setDescription(`${x} Yönetici\n${x2} Denetim Kaydını Görüntüle\n${x3} Sunucuyu Yönet\n${x4} Rolleri Yönet\n${x5} Kanalları Yönet\n${x6} Üyeleri At\n${x7} Üyeleri Yasakla\n${x8} Mesajları Yönet\n${x9} Kullanıcı Adlarını Yönet\n${x10} Emojileri Yönet\n${x11} Webhook'ları Yönet`)
.addField('Başında <:yrnex_mchyr:798278344059387904> olanlar o yetkiye sahip olunmadığını gösterir. \nBaşında <:yrnex_mcevt:798278281638969345>  olanlar o yetkiye sahip olunduğunu gösterir.', `Yetkiler`)
    return message.channel.send(embed);
  
  
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['izinler', 'yetkilerim'],
  permLevel: 0,
};

exports.help = {
  name: 'yetkiler',
  description: 'Komutu kullandığınız sunucudaki yetkilerinizi/izinlerinizi gösterir.',
  usage: 'yetkilerim'
};