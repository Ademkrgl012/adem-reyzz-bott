const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message) => {
  message.channel.send("**🔍 Atatürk'ün En Güzel Sözünü Buluyorum!**").then(message => {
    var xfalcon = [
      "Hayatı ve özgürlüğü için ölümü göze alan bir millet asla yenilmez.",
      "Yurtta sulh, cihanda sulh.",
      "Şuna inanmak gerekir ki, dünya yüzünde gördüğümüz her şey kadının eseridir.",
      "Egemenlik verilmez, alınır.", 
      "Hayatta en hakiki mürşit ilimdir.", 
      "Bir ulus sanattan ve sanatçıdan yoksunsa, tam bir hayata sahip olamaz.",
      "Benim naçiz vücudum elbet bir gün toprak olacaktır, ancak Türkiye Cumhuriyeti ilelebet payidar kalacaktır.",
      "Gençler cesaretimizi takviye ve idame eden sizlersiniz. Siz, almakta olduğunuz terbiye ve irfan ile insanlık ve medeniyetin, vatan sevgisinin, fikir hürriyetinin en kıymetli timsali olacaksınız. Yükselen yeni nesil, istikbal sizsiniz. Cumhuriyeti biz kurduk, onu yükseltecek ve yaşatacak sizsiniz.",
      "Dünyada her şey için, medeniyet için, hayat için, başarı için, en hakiki mürşit bilimdir, fendir.",
      "Eğer bir gün benim sözlerim bilimle ters düşerse bilimi seçin.",
      "Hürriyet olmayan bir memlekette ölüm ve çöküş vardır. Her ilerleyişin ve kurtuluşun anası hürriyettir.",
      "Bir ulus, sımsıkı birbirine bağlı olmayı bildikçe yeryüzünde onu dağıtabilecek bir güç düşünülemez.", //DevTR | xFalcon
      "Öğretmen bir kandile benzer, kendini tüketerek başkalarına ışık verir.", //DevTR | xFalcon
      "Başarı tüm ulusun azim ve inancıyla çabasını birleştirmesi sonucu kazanabilir.", //DevTR | xFalcon
      "Bir milletin medeniyetini ölçmek istiyor musunuz? Kadınlarına nasıl muamele edildiğine bakınız.", //DevTR | xFalcon
      "Kültür zeminle orantılıdır. O zemin milletin seciyesidir." //DevTR | xFalcon

    ]; //DevTR | xFalcon
    var devtr = xfalcon[Math.floor(Math.random() * xfalcon.length)]; //DevTR | xFalcon
    message.edit(`Baş Komutunamızdan Sana: \n**${devtr}**`); //DevTR | xFalcon
  });
}; //DevTR

exports.conf = {
  enabled: true, //DevTR | xFalcon
  guildOnly: false, //DevTR | xFalcon
  aliases: ["atatürk", "random-atatürk"], //DevTR | xFalcon
  permLevel: 0 //DevTR | xFalcon
};

exports.help = { 
  name: "atatürkün-sözü", //DevTR | xFalcon
  description: "Atatürkten Söz Verir", //DevTR | xFalcon
  usage: "atatürkün-sözü"//DevTR | xFalcon
};

