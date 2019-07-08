const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message',message => {
    if (message.content === 'ping') {
      message.reply('pong');
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(NTk3ODc5NzU1MDk3ODk5MTA4.XSOsvQ.3yLKlLEd_gLlKD1C3ks4P7DM7bU);
