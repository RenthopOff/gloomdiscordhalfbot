const Discord = require('discord.js')

exports.run = (bot, message, args, tools) => {

    var images = ["https://i.imgur.com/fm49srQ.gif", "https://i.imgur.com/o2SJYUS.gif", "https://i.imgur.com/Agwwaj6.gif", "https://i.gifer.com/cCX.gif", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7vgxCdD_ojfyfBGdZPeei11Hm7cK3zrPJTcsTYZ9Tl-dsA7upzw", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUPZp5heqxYIWj0l1G0KDC3o9YqJvmAG2FqP6n1BSVGwO5pnSMgg", "https://pa1.narvii.com/6067/68a2bb5829d993b3362a37dce55caa9c0949af6c_hq.gif", ];
    var rand = Math.floor(Math.random() * images.length);
    var randomImage = images[rand];

    const patEmb = new Discord.RichEmbed()
        .setColor(0xA901DB)
        .setImage(randomImage);
    if (!args[0]) {
        message.channel.send(`<@${message.author.id}> выбери кого-нибудь что бы шлепнуть.`, {
        });
        return;
    }

    if (!message.mentions.users.first()) return message.channel.send(`Ты не выбрал пользователя!`).then(msg => {
        msg.delete(3000)
    });
    message.channel.send(`<@${message.author.id}> шлепнул(a) ${args[0]}`, {
        embed: patEmb
    });


}

module.exports.help = {
    name: "slap"
}
