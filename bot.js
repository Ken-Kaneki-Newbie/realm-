const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require("fs");


bot.on('ready', () =>{
	console.log('The bot is online!');
	bot.user.setActivity('Say help in my dms', {type:"WATCHING"});
});


bot.on("message", message=>{
	if(message.author.bot) return;
        if (message.channel.type === "dm") {
const modrole = bot.guilds.cache.get("705332103671447553").roles.cache.find(r => r.name === "Support Team");
const dmchannel = bot.guilds.cache.get("705332103671447553").channels.cache.find(channel => channel.name === "support");
const dmembed = new Discord.MessageEmbed()
.setAuthor("A new request has arrived!")
.setDescription(`<@${message.author.id}> has asked for help!\n Free Staff can dm him/her and help them!\n Thanks!`)
.setFooter('Realm 7 Support') 
.setTimestamp()
dmchannel.send(`${modrole}`);
dmchannel.send(dmembed);
}
const helpEmbed = new Discord.MessageEmbed()
.setAuthor('Realm 7 Support')
.setDescription('Your request has been recorded! \n Our support staff will contact you soon and get all your problems solved!\n This might take some time because our staff are busy and have to handle many things.\nPlease be patient.Thanks for contacting us!')
.setThumbnail('https://cdn.discordapp.com/attachments/701868673371209812/723231357781672016/JPEG_20200511_133841.png')
.setTimestamp()


if (message.content === 'Help') {
	message.channel.send(`<@${message.author.id}>`)
	message.channel.send(helpEmbed);
}
if (message.content === 'help') {
	message.channel.send(`<@${message.author.id}>`)
	message.channel.send(helpEmbed);
}
     });

bot.login(process.env.BOT_TOKEN);
