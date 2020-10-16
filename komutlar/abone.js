const Discord = require('discord.js');
exports.run = async(client, message, args, ops) => {
    message.delete()
    if (!message.member.roles.find("name", "・PERSEUS OF STARBY")) {
        return message.channel.send(' **Bu Komutu Kullanmak için** Destek Ekibi **Rolüne Sahip Olman Lazım** ')
            .then(m => m.delete(5000));
    }
    let toabone = message.guild.member(message.mentions.users.first());
    let abonerole = message.guild.roles.find(`name`, "🔔・  SUBSCRIBER OF STARBY");
    if (!abonerole) return message.reply("Rol Bulunamadı Lütfen 'Abone' Adıyla Rol Oluşturunuz.");
    if (!toabone) return message.reply("Bir Kişiyi Et");
    await (toabone.addRole(abonerole.id));
    let vUser = message.guild.member(message.mentions.users.first());
    let aboneembed = new Discord.RichEmbed()
        .setTitle("<a:sarey:765533152248594484> ・ Abone Rolü Verildi")
        .setColor('PURPLE')
        .addField("<a:uyar:765533151258476564> ・ Abone Rolü Veren Yetkili", `${message.author.tag}`, true)
        .addField("<a:tik:765276741362253885> ・ Abone Rolü Alan Kullanıcı", `${vUser}`, true)
       .setTimestamp();
    let abonelog = message.guild.channels.find(`name`, "📷・foto-chat");
      if (!abonelog) return message.channel.send("Kayıt Log Kanalı bulunamadı.`");
    abonelog.send(aboneembed);
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kayıt','k'],
};
exports.help = {
  name: 'a',
  description: 'Kayıt etme komutu',
  usage: 'a'
};  