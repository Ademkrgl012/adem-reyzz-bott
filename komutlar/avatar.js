const Discord = require('discord.js');
exports.run =async(client,message,args)=>{
  let user;
  if (message.mentions.users.first()){
    user = message.mentions.users.first();
  }else{
    user = message.author;
  }
   const avatar = new Discord.RichEmbed()
   .setColor("RANDOM")
   .setAuthor(">Avatarınız")
   .setImage(user.avatarURL)
   message.channel.sendEmbed(avatar)
};
 exports.conf ={
   enabled:true ,
   guilOnly:false ,
   aliases:["pp"],
   permlevel:'Yetki Gerekmiyor'
 }
  exports.help ={
    "name":"avatar",
    "description":"avatarınızı atar",
    "usage":"avatar @kişi"
  }