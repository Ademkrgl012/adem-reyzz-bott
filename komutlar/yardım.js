const Discord = require ("discord.js");

exports.run = (client, message) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
const ADEMREYZZEMBED = new Discord.MessageEmbed()

.setColor("BLACK")
.setTitle("**  » Adem Reyzz**")
.setImage("https://cdn.discordapp.com/attachments/813881349004984370/826793395677691924/350kb_1.gif")
.setDescription(`
**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/uruvQjX47v)** **•** **[Botun Davet Linki](https://discord.com/oauth2/authorize?client_id=826508857463275542&scope=bot&permissions=2147483647)** **•**
Bir komut hakkında detaylı __yardım için__: **y!yardım**`)

.addField('**• Komutlar**',' Botun Tüm Komutları Aşağıda Bulunmaktadır.')
.addField('> a!moderasyon ',' 🔰 Moderasyon komutları')
.addField('> a!kullanıcı ',' 👥 Kullanıcı komutları')
.addField('> a!abone-yardım ',' 🔔 Ayarlamalı Abone Rol Sistemi')
.addField('> a!eğlence','  ✨ Eğlence Komutları')
return message.channel.send(ADEMREYZZEMBED)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'yardım', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: 'a!eğlence'
};