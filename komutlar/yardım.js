const Discord = require('discord.js')
const moment = require('moment')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
const client = new Discord.Client();
require("moment-duration-format");
const prefix = ayarlar.prefix
exports.run = async (bot, msg, args) => {

        const çekiliş = new Discord.MessageEmbed()
                .setColor('GOLD')
        .setFooter(`${msg.author.username} Başarıyla Çekiliş Komutunu Kullandı!`, msg.author.avatarURL)
        .setAuthor('Daemon Giveaway Yardım Menüsü')
        .setThumbnail('https://cdn.discordapp.com/attachments/attachments/779352182033350696/779436272862756894/b0dc9c624be542e492eaf456a74edec6PnDsNClw3DsOzEtr-9.jpg')
        .setDescription('<a:yr_trnctac:775380721682087936> Botu Davet Etmek İçin `dg!davet` yazabilirisiniz.',false)
        .addField('**__MODERASYON__**','<a:yr_cekls:775360594252791858> `y!moderasyon` \nModerasyon Komutlarını Görüntülersiniz.',false )
        .addField('**__KULLANICI__**','<a:squad:775385865492234260>  `y!kullanıcı` \nKullanıcı Komutlarını Görüntülersiniz.',true)
        .addField('**__ABONE SİSTEMİ__**', '<a:prlkelmas:779386058194288643> `y!abone-sistemi` \nAbone Rol Komutlarını Görüntülersiniz.',false)
        .addField('**__Bilgilendirme__**', '<a:rainbowzincir:779439237061672981>  `y!davet` | Botu Sununuya Davet Edersiniz \n<a:rainbowzincir:779439237061672981> `y!ping` | Botun İslatistiklerini Görürsünüz',true)
  
msg.channel.send(çekiliş)
    
}
exports.conf = {
  enabled: true,
  guildOnly: true,
 aliases: ['yardım', 'help'],
  kategori: 'yardım',
  permLevel: 0
};
exports.help = {
  name: 'yardım',
  description: 'İstediğiniz kullanıcını bilgilerini gösterir.',
  usage: 'yardım'
};