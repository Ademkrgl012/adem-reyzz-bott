const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle("<a:yldz:765522787610787850> Dwonzy Bot Eğlence Komutları! <a:yldz:765522787610787850>")
 .setTimestamp()
.setDescription("<a:yan:765915647557107743> **-tersyazı** = Bir Yazıyı Bot Ters Yazar.  \n <a:yan:765915647557107743> **-mcskin** = Yazdığınız ismin minecraft görünüşünü atar.  \n <a:yan:765915647557107743> **-fbi** = Bot FBi Gif Atar.  \n <a:yan:765915647557107743> **-token** = Tokenimi Öğrenmek İstemezmisin?  \n <a:yan:765915647557107743> **-düello** = Düello Atarsın.  \n <a:yan:765915647557107743> **-wasted** = Polis tarafından yakalanırsın.  \n <a:yan:765915647557107743> **-atatürk** = Dene ve gör... (1881-1938)  \n <a:yan:765915647557107743> **-kaç-cm** = Malafatını Ölçer  \n <a:yan:765915647557107743> **-espri** = Bot Espri Yapar  \n <a:yan:765915647557107743> **-tokatat** = Etiketlediğin Kişiye Tokat Atar \n <a:yan:765915647557107743> **-öp** = Dene ve Gör XD")
.setImage("https://cdn.discordapp.com/attachments/765269752788025375/765912834592342016/Untitled_design_1.gif")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'eğlence',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!eğlence'
}