module.exports = {
	name: 'rolkiadminembed',
  description: 'Pokazuje adminowy embed rolek.',
  args: false,
  guildOnly: true,
	execute(msg, args, Discord, config, client) {
    msg.delete()
      .catch(console.error);
    const rolkiEmbed = new Discord.MessageEmbed()
      .setTitle('Nadawanie Ról')
      .setColor(config.embedColor)
      .setDescription(`#rolki jest kanałem do przyznawania sobie ról.\nDostępne role: \`tf2\`, \`liga\`, \`csgo\`, \`minecraft\`, \`rainbow-six\`.\n\nRole te służą do pingowania na poszczególnych kanałach, by zebrać ludzi chętnych do gry bądź zainteresowanych pewnym wydarzeniem.\n\nBy przydzielić sobie rolę, po prostu wspisz ją na czacie! Jest on czyszczony zaraz po. Aby pozbyć się roli, wystarczy wpisać jej nazwę jeszcze raz.`)
      .attachFiles('./gractwo.png')
      .setFooter(`#rolki`, 'attachment://gractwo.png')
      .setTimestamp();
    msg.channel.send(rolkiEmbed);
    console.log(`Responded to rolki admin embed request by ${msg.author.username}`);
	},
};