const Discord = require('discord.js');
exports.run = async(client, message, args, ops) => {
    message.delete()//lütfen çalmayın zaman harcadım lord creative  
    if (!message.member.roles.find("name", "Yetkili Rol İsim")) {
        return message.channel.send(' **Bu Komutu Kullanmak için** Kayıt Ekibi **Rolüne Sahip Olman Lazım** ')
            .then(m => m.delete(5000));
    }
    let toverify = message.guild.member(message.mentions.users.first());
    let verifyrole = message.guild.roles.find(`name`, "Verilecek Rol İsim");//lütfen çalmayın zaman harcadım lord creative  
    if (!verifyrole) return message.reply("Rol Bulunamadı Lütfen 'Doğulandı' Adıyla Rol Oluşturunuz.");
    if (!toverify) return message.reply("Bir Kişiyi Et");
    await (toverify.addRole(verifyrole.id));
    let vUser = message.guild.member(message.mentions.users.first());
    let verifembed = new Discord.RichEmbed()
        .setTitle("Abone Rölü Verildi")//lütfen çalmayın zaman harcadım lord creative  
        .setColor('#ffd100')
        .addField("Abone Rolü Veren Yetkili", `${message.author.tag}`, true)
        .addField("Abone Rolü Alan Kullanıcı", `${vUser}`, true)
        .setTimestamp();
    let veriflog = message.guild.channels.find(`name`, "log kanal isim");
      if (!veriflog) return message.channel.send("Doğrulama Kullanıcı Log Kanalı bulunamadı. Lütfen  Adlı Kanal Oluşturunuz.`");
    veriflog.send(verifembed);
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['abone'],
};

exports.help = {
  name: 'a',//lütfen çalmayın zaman harcadım lord creative  
  description: 'Kullanıcı İçin Doğrulandı Rolünü Verir.',
  usage: 'a'
}; 

//lütfen çalmayın zaman harcadım lord creative   
//discord.gg/codeworld