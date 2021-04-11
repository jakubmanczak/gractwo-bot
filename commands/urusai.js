const fs = require('fs');
module.exports = {
	name: 'urusai',
  description: 'Mówi jemenikowi żeby zamknął dupę (na vc).',
  args: false,
  guildOnly: true,
	async execute(msg, args, Discord, config, client) {
    if (msg.member.voice.channel) {
      const connection = await msg.member.voice.channel.join();
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
      const dispatcher = connection.play(fs.createReadStream('./commands/urusai.mp3'));
      dispatcher.on('speaking', speaking => {
        if (speaking === 0) { msg.member.voice.channel.leave() }
      })
    } else {
      msg.reply(`Najpierw musiałbyś być na kanale głosowym...`);
    }
    console.log(`Responded to urusai request by ${msg.author.username}`);
	},
};