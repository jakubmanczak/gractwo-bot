module.exports = {
	name: 'ping',
  description: 'Pokazuje ping.',
  args: false,
  guildOnly: false,
	execute(msg, args, Discord, config, client) {
    msg.delete()
      .catch(console.error);
    const pingEmbed = new Discord.MessageEmbed()
      .setTitle('Pong!')
      .setColor(config.embedColor)
      .setDescription(`Ping API wynosi ${client.ws.ping}`)
      .attachFiles('./gractwo.png')
      .setFooter(`Komenda wywołana przez ${msg.author.username}`, 'attachment://gractwo.png')
      .setTimestamp();
    msg.channel.send(pingEmbed);
    console.log(`Responded to ping request by ${msg.author.username}`);
	},
};