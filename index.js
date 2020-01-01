const Discord = require('discord.js');
const bot = new Discord.Client();
const client = new Discord.Client()
var prefix = 'o!';
const fs = require('fs')
bot.commands = new Discord.Collection()

const config = require('./config.json');

fs.readdir('./commandes/', (err, files) => {
    if(err) console.log(err);
    console.log(`${files.length} commandes`);
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
        console.log('commandes non trouvée. ');
        return;
    }

    jsfile.forEach((f, i) => {
        let props = require(`./commandes/${f}`);
        bot.commands.set(props.help.name, props);

    })
})

bot.on('ready', function(){
    console.log('A démmarer');
    console.log(bot.guilds.map(r => r.name + `| ${r.memberCount} membres`))
    bot.user.setStatus("online")
    //bot.user.setActivity('tuto', {type: 'WATCHING'})
    bot.user.setGame(`${bot.users.size} Users | o!help`)
})

    bot. login(config.token);

    bot.on('message' , async message => {

        bot.emit('checkMessage', message);

        let prefix = config.prefix;
        let messageArray = message.content.split(" ");
        let cmd = messageArray[0];
        let Args = messageArray.slice(1);
        var args = message.content.substring(prefix.length).split(" ");

        let commandeFile = bot.commands.get(cmd.slice(prefix.length));
        if(commandeFile) commandeFile.run(bot, message, Args, args)
})

bot.on('guildMemberAdd', function (member) {
    let embed = new Discord.RichEmbed()
    .setColor('#ff00e6')
    .setThumbnail('https://cdn.discordapp.com/attachments/646358247409975297/658770853449826305/nex_3.png')
    .setURL('https://top-serveurs.net/gta/originalrp')
    .setTitle(`**__Bienvenue sur le Serveur !! __**`)
    .setDescription(`:airplane: | Bonjour/Bonsoir **<@${member.user.id}>**, 
    \nMerci de mettre un **Nom et Prénom RP** (change de pseudo) [discord et steam]
    \nPour avoir le rôle de citoyen veuillez bien réagir avec **l'emoji** en dessous du <#646358276950196237> merci !!!
    Si tu compte rejoindre nos joueurs White List n'hésite pas à passer ta douane.
    toutes les informations sont dans <#646358379941331004> .`)
    .setTimestamp()
    .setFooter('Nous sommes désormais ' + member.guild.memberCount)
    member.guild.channels.get('646358245358829589').send(embed)
    member.addRole('646354194046910484');
})
 
bot.on('guildMemberRemove', function (member) {
    let embed = new Discord.RichEmbed()
        .setDescription(`:airplane: <@${member.user.id}> Goodbye my lover, Goodbye my friend.`)
        .setFooter('Nous sommes désormais ' + member.guild.memberCount)
    member.guild.channels.get('646358246487228427').send(embed);
})
