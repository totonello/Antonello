const { Client } = require('discord.js');
const client = new Client({disableEveryone : true });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') msg.channel.send('Pong!');
  if (msg.content === 'everyone') msg.channel.send('@everyone salut à tous', { disableEveryone: false });
  if (msg.content === 'noteveryone') msg.channel.send('@everyone (noteveryone), salut à tous !');
});

client.login('NjU4NzMyMDg3NjExODgzNTQw.XgObig._Sp9sIsCytuj99Mt3oCROilGH3Q');