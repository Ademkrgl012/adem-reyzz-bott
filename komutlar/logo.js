const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle("<a:yldz:765522787610787850> Starby lOGO Komutları! <a:yldz:765522787610787850>")
 .setTimestamp()
.setDescription("<a:yan:765915647557107743> **-dinamik** = Dinamik logo oluşturur.  \n <a:yan:765915647557107743> **-altın** = Altın logo oluşturur.  \n <a:yan:765915647557107743> **-banner** = Banner logo oluşturur.  \n <a:yan:765915647557107743> **-basit** = Basit logo oluşturur.  \n <a:yan:765915647557107743> **-elmas** = Elmas logo oluşturur.  \n <a:yan:765915647557107743> **-sarı** = Sarı logo oluşturur.  \n <a:yan:765915647557107743> **-neonmavi** = Neon mavi logo oluşturur.  \n <a:yan:765915647557107743> **-kalın** = Kalın logo oluşturur.  \n <a:yan:765915647557107743> **-anime** = Anime yazı tipinde logo oluşturur.  \n <a:yan:765915647557107743> **-habbo** = Habbo yazı tipinde logo oluşturur.  \n <a:yan:765915647557107743> **-arrow** = Ok işaretli logo oluşturur.  \n <a:yan:765915647557107743> **-green** = Yeşil logo oluşturur.  \n <a:yan:765915647557107743> **-alev** = Alevli logo oluşturur.  \n <a:yan:765915647557107743> **-red** = Kırmızı logo oluşturur. ")
.setImage("https://cdn.discordapp.com/attachments/765269752788025375/765912834592342016/Untitled_design_1.gif")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["logo"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'logo',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'-logo'
}