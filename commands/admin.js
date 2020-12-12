const { Message } = require("discord.js");

module.exports = {
	name: 'admin',
  description: 'Ukryte rzeczy dla adminów. Tajne sprawy.',
  args: false,
  guildOnly: true,
	execute(msg, args, Discord, config, client) {
    if(msg.member.roles.cache.find(role => role.name == 'Moderatorzy')){
      if(args[0] == 'botannouncement'){
        const botAnnouncementEmbed = new Discord.MessageEmbed()
          .setTitle('Hej,')
          .setDescription('W ciągu ostatnich trzech dni zostałem stworzony ja - bot Gractwa.')
          .setColor(config.embedColor)
          .addField('Moja funkcja',`Zastąpiłem wiadomości na kanałach \`#witaj\`, i \`#regulamin\`, serwisuję również \`#rolki\`.`)
          .addField('Zmiany',`Wraz z moim przybyciem zostało uproszczone nasze logo, w regulaminie czekają na Was dwie nowe zasady (niezbyt restrykcyjne ;3), forma serwera została uproszczona.`)
          .addField('Rolki? Co?', `Rolki To!\n\nMogą one być wykorzystywane do zbierania osób do grania bądź do rozmów. Było to coś o co poproszone naszą administrację już dawno temu. Dziś jest to już dla Was dostępne!`)
          .attachFiles('./gractwo.png')
          .setFooter(`#rolki`, 'attachment://gractwo.png')
          .setTimestamp();
        msg.channel.send(botAnnouncementEmbed);
        msg.channel.send('hej');
      }
    }else{
      msg.reply('chyba nie masz na to wystarczających permisji.');
    }
	},
};