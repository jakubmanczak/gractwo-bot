module.exports = {
	name: 'urusai',
  description: 'Mówi jemenikowi żeby zamknął dupę (na vc).',
  args: false,
  guildOnly: true,
	execute(msg, args, Discord, config, client) {
    msg.delete()
      .catch(console.error);
    const jzdEmbed = new Discord.MessageEmbed()
      .setTitle('Chotto matte! >w<')
      .setColor(config.embedColor)
      .setDescription(`Mówienie jemenikowi żeby zamknął dupę...`)
      .attachFiles('./gractwo.png')
      .setFooter(`Komenda wywołana przez ${msg.author.username}`, 'attachment://gractwo.png')
      .setTimestamp();
    msg.channel.send(jzdEmbed);
    console.log(`Responded to urusai request by ${msg.author.username}`);
	},
};