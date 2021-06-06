require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('= = = = The bot is turning on.');
	console.log('= = Loading commands...');

	console.log('= = Loaded all commands.');
	console.log('= = = = The bot has turned on.');
});

client.on('message', (message) => {
	if (message.content.includes('te')) {
		message.channel.send('te orzechy');
	}
});

client.login(process.env.BOT_TOKEN);
