const { MessageEmbed } = require("discord.js");
module.exports = member => {
  const embed = new MessageEmbed()
    .setColor("#ff00e6")
    .setThumbnail("https://cdn.discordapp.com/attachments/646358247409975297/658770853449826305/nex_3.png")
    .setURL("https://top-serveurs.net/gta/originalrp")
    .setTitle("**__Bienvenue sur le Serveur !! __**")
    .setDescription(`:airplane: | Bonjour/Bonsoir **<@${member.user.id}>**, 
    \nMerci de mettre un **Nom et Prénom RP** (change de pseudo) [discord et steam]
    \nPour avoir le rôle de citoyen veuillez bien réagir avec **l"emoji** en dessous du <#646358276950196237> merci !!!
    Si tu compte rejoindre nos joueurs White List n"hésite pas à passer ta douane.
    toutes les informations sont dans <#646358379941331004> .`)
    .setTimestamp()
    .setFooter("By Totonello");
  const salon = member.guild.channels.find(c => c.id === "646358245358829589");
  if (salon) {
    salon.send(embed);
  }
  member.roles.add("646354194046910484");
};
