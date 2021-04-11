module.exports = {
	name: 'jmd',
  description: 'Mówi jemenikowi żeby zamknął dupę.',
  args: false,
  guildOnly: true,
	execute(msg, args, Discord, config, client) {
    msg.delete()
      .catch(console.error);
    const jmdEmbed = new Discord.MessageEmbed()
      .setTitle('chotto matte')
      .setColor(config.embedColor)
      .setDescription(`Mówienie jemenikowi żeby zamknął dupę...`)
      .attachFiles('./gractwo.png')
      .setFooter(`Komenda wywołana przez ${msg.author.username}`, 'attachment://gractwo.png')
      .setTimestamp();
    msg.channel.send(jmdEmbed);
    console.log(`Responded to jmd request by ${msg.author.username}`);
	},
};