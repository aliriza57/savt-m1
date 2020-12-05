const Discord = require('discord.js');
const { RichEmbed } = require('discord.js');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube('AIzaSyBl7Djqx2mDMFPIRkLIhKIY-dH0B9x-cxQ');

exports.run = async (client, message, args) => {
  const queue = client.queue;    
    var searchString = args.slice(0).join(' ');
    var url = args[0] ? args[0].replace(/<(.+)>/g, '$1') : '';
    var serverQueue = queue.get(message.guild.id);

    var voiceChannel = message.member.voiceChannel;
        
    const err1 = new RichEmbed()
    .setColor("e2284e")
    .setDescription(`**:red_square: | Bir sesli kanalda değilsin.**`)  
    if (!voiceChannel) return message.channel.send(err1);
    const err2 = new RichEmbed()
    .setColor("ce0033")
    .setDescription(`**:question: | Şu anda bir şarkı çalmıyor.**`)
    if (!serverQueue) return message.channel.send(err2);
    serverQueue.songs = [];
    const songEnd = new RichEmbed()
    .setColor("RANDOM")
    .setDescription(`:mailbox_with_no_mail: | **Peki Görüşmek Üzere**`)
    serverQueue.connection.dispatcher.end('');
    message.channel.send(songEnd);
};

exports.conf = {
    enabled: true,
    aliases: ['stop'],
    permLevel: 0
};

exports.help = {
    name: 'çık',
    description: 'Oynatılan/çalan şarkıyı kapatır.',
    usage: 'çık'
};