module.exports = {
  name: 'regulamin',
  description: 'Wyświetla regulamin / pojedyńcze zasady.',
  args: false,
  guildOnly: true,
  execute(msg, args, Discord, config){
    arg0 = args[0];
    msg.delete()
      .catch(console.error);
    regulaminEmbedTitleArray = [
      'Regulamin','§1 Szacunek','§2 Spam / Trolling',
      '§3 Shitposting','§4 Poprawne Kanały','§5 Memy i Gify',
      '§6 Reklamy','§7 Przestrzeganie Regulaminu','§8 Obcowanie z botem',
      '§9 Warunki Użytkowania Discord (ToS)'
    ];
    regulaminEmbedContentArray = [
      'Regulamin naszego serwera prezentuje się następująco:',
      'Na naszym serwerze obowiązuje szacunek do innych osób podczas niesatyrycznej dyskusji.',
      'Jeżeli będziesz bezużytecznie spamować lub nieprzyjmenie się zachowywać zostaniesz zbanowany.',
      'Kanał #shitposting jest najbardziej wyluzowanym kanałem na naszym serwerze. Nie oznacza to jednak, że nie jest monitorowany. Jeżeli czujesz, że rzecz którą chcesz tam umieścić jest nadzwyczajnie kontrowersyjna, zastanów się dwa razy przed wciśnięciem Enter.',
      'Rozmowy na dany temat powinny toczyć się w kanałach do tego przeznaczonych.',
      'Memy i Gify nie są zbyt przyjemne dla oka bez kontekstu. Najlepiej jest nie postować ich, jeżeli nie pasują do prowadzonej aktualnie dyskusji.',
      'Zakaz reklam bez zezwolenia moderatora lub administratora. Pozwolenia na reklamę muszą być wydane przed jej zamieszczeniem.',
      'Przestrzeganie regulaminu jest obowiązkowe, a to że go ktoś nie przeczytał nic nie zmienia.',
      'Próby intencjonalnego łamania bota nie są mile widziane, tak jak nadużywanie go w celach spamu kanałów.',
      'Nasz serwer, jak każdy inny, musi przestrzegać zasad zapisanych w warunkach użytkowania Discorda. Przypominamy o nich, bo choć nie są zbyt restrykcyjne, nie pozwalają na kilka określonych rzeczy.'
    ];
    
    const num = parseInt(args[0]);

    if(num > 0 && num < regulaminEmbedTitleArray.length){
      const calyRegulaminEmbed = new Discord.MessageEmbed()
        .setTitle(regulaminEmbedTitleArray[num])
        .setDescription(regulaminEmbedContentArray[num])
        .setColor(config.embedColor)
        .attachFiles('./gractwo.png')
        .setFooter(`Komenda wywołana przez ${msg.author.username}`, 'attachment://gractwo.png')
        .setTimestamp();
      msg.channel.send(calyRegulaminEmbed);
      console.log(`Responded to request for a specific rule by ${msg.author.username}`);
    }else{
      const calyRegulaminEmbed = new Discord.MessageEmbed()
        .setTitle(regulaminEmbedTitleArray[0])
        .setDescription(regulaminEmbedContentArray[0])
        .setColor(config.embedColor)
        .attachFiles('./gractwo.png')
        .setTimestamp();
      for(i = 1; i < regulaminEmbedTitleArray.length; i++){
        calyRegulaminEmbed
          .addField(regulaminEmbedTitleArray[i],regulaminEmbedContentArray[i]);
      }
      if(args[0] == 'admin' && msg.member.hasPermission('Moderator')){
        calyRegulaminEmbed
          .setFooter(`Ostatnio zaktualizowany`, 'attachment://gractwo.png');
      }else{
        calyRegulaminEmbed
          .setFooter(`Komenda wywołana przez ${msg.author.username}`, 'attachment://gractwo.png')
      }
      msg.channel.send(calyRegulaminEmbed);
      console.log(`Responded to request for the whole ruleset by ${msg.author.username}`);
    }
  }
}