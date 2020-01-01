client.on('guildMemberAdd', function (member) {
    let embed = new Discord.RichEmbed()
    .setColor('#ff00e6')
    .setTitle('**__Bienvenue sur le Serveur !! __**')
    .setURL('https://discord.gg/z3tqXu7')
    .setDescription(`:airplane: | Bonjour/Bonsoir **<@${member.user.id}>**, 
    \nMerci de mettre un **Nom et Prénom RP** (change de pseudo)
    \nPour avoir le rôle de citoyen veuillez bien réagir avec **l'emoji** en dessous du <#646358276950196237> merci !!!
    Si tu compte rejoindre nos joueurs White List n'hésite pas à passer ta douane.
    toutes les informations sont dans <#646358379941331004> .`)
    .setTimestamp()
    .setFooter('Nous sommes désormais ' + member.guild.memberCount)
    member.guild.channels.get('646358245358829589').send(embed)
    member.addRole('646354194046910484')
})
 
client.on('guildMemberRemove', function (member) {
    let embed = new Discord.RichEmbed()
        .setDescription(`:airplane: <@${member.user.id}> Goodbye my lover, Goodbye my friend.`)
        .setFooter('Nous sommes désormais ' + member.guild.memberCount)
    member.guild.channels.get('646358246487228427').send(embed)
})
