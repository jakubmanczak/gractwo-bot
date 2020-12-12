const Discord = require('discord.js');
const config = require('./config.json');
const fs = require('fs');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () =>{
  console.log('-------------------------------------\nTHE BOT IS READY TO GO.\n-------------------------------------');
})

client.on('message', message => {

	if(message.channel.name == 'rolki'){

		if(message.author.bot) return;

		if(message.content == 'tf2' || message.content == 'liga' || message.content == 'csgo' || message.content == 'minecraft' || message.content == 'rainbow-six'){
			const role = message.member.guild.roles.cache.find(role => role.name == message.content)
			if(message.member.roles.cache.find(role => role.name == message.content)){
				message.member.roles.remove(role);
				message.delete();
				console.log(`removed ${message.author.username}'s ${message.content} role.`);
				const removeRolesEmbed = new Discord.MessageEmbed()
					.setTitle(`Odebrano Ci rangę ${message.content}, ${message.author.username}.`)
					.setColor(config.embedColor)
					.attachFiles('./gractwo.png')
					.setFooter('#rolki','attachment://gractwo.png')
					.setTimestamp();
				message.channel.send(removeRolesEmbed)
					.then(message => message.delete({timeout: 3500}))
					.catch(console.error);
			}else{
				message.member.roles.add(role);
				message.delete();
				console.log(`added ${message.content} role to ${message.author.username}.`);
				const addRolesEmbed = new Discord.MessageEmbed()
					.setTitle(`Przyznano Ci rangę ${message.content}, ${message.author.username}.`)
					.setColor(config.embedColor)
					.attachFiles('./gractwo.png')
					.setFooter('#rolki','attachment://gractwo.png')
					.setTimestamp();
				message.channel.send(addRolesEmbed)
					.then(message => message.delete({timeout: 3500}))
					.catch(console.error);
			}
		}else{
			if(!message.member.roles.cache.find(role => role.name == 'Moderatorzy')){
				console.log(`${message.author.username} spammed the rolki channel with a bad message`);
				const rolkiWrongMessageEmbed = new Discord.MessageEmbed()
					.setTitle(`To nie jest kanał na pisanie, ${message.author.username}`)
					.setColor(config.embedColorFail)
					.attachFiles('./gractwo.png')
					.setFooter('#rolki','attachment://gractwo.png')
					.setTimestamp();
				message.channel.send(rolkiWrongMessageEmbed)
					.then(message => message.delete({timeout: 3500}))
					.catch(console.error);
			return;
			}
		}
		
	}

  if (!message.content.startsWith(config.prefix) || message.author.bot) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	if (!client.commands.has(commandName)) return;
	const command = client.commands.get(commandName);

	if (command.guildOnly && message.channel.type === 'dm') {
		return message.reply('I can\'t execute that command inside DMs!');
	}

	if (command.args && !args.length) {
		return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
	}

	try{
		command.execute(message, args, Discord, config, client);
	}catch(error){
		console.error(error);
		message.reply('there was an error trying to execute that command.');
	}
});

client.login(process.env.BOT_TOKEN);