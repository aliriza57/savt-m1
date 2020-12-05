const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '1'
let yardım = new Discord.RichEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL)
.setColor('RANDOM')
.addField('1çık',`
**1çal <şarkıismi>** : Seçilen Şarkıyı Söyler
**1dur** : Çalan Şarkıyı Durdurur
**1devam** : Durdurduğunuz Şarkıyı Devam Ettirir
**1tekrar** : Çalan Şarkıyı Tekrarlar
**1geç** : Bi Sonraki Şarkıya Geçiş Yapar
**1çek** : Botu Sese Çeker 
**1ses** : Ses Seviyesini Belirler __1/10__`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
.setThumbnail("https://media.giphy.com/media/Z9WQLSrsQKH3uBbiXq/giphy.gif")
.setImage("https://media.giphy.com/media/l46CqqobS7VRaIpSE/giphy.gif")

 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["bilgi"], 
  permLevel: 0
};
exports.help = {
  name: 'bilgi'
};
  