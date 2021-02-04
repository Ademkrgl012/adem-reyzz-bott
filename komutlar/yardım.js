const Discord = require ("discord.js");

exports.run = (client, message) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
const NARCOSEMBED = new Discord.MessageEmbed()

.setColor("BLACK")
.setTitle("**  » Yrnex**")
.setImage("https://cdn.discordapp.com/attachments/797899158807117867/798281669961842806/standard_22.gif")
.setDescription(`
**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/qzHTkhjQgT)** **•** **[Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=787328444954050570&permissions=8&scope=bot)** **•**
Bir komut hakkında detaylı __yardım için__: **y!yardım**`)

.addField('**• Komutlar**',' Botun Tüm Komutları Aşağıda Bulunmaktadır.')
.addField('> y!moderasyon ',' <:emoji_1:793928339261227020> Moderasyon komutları')
.addField('> y!kullanıcı ',' <:emoji_3:793928384932610099> Kullanıcı komutları')
.addField('> y!abone-yardım ',' <:emoji_1:793928364133056513> Ayarlamalı Abone Rol Sistemi')
.addField('> y!eğlence','  <:emoji_4:793928482463154186> Eğlence Komutları')
.addField('> y!kayıt-yardım ',' <:emoji_4:793928460661555240> Ayarlamalı Kayıt Sistemi')
return message.channel.send(NARCOSEMBED)
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
    usage: '-eğlence'
};