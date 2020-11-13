const config = require('./config.json');

const Discord = require('discord.js');

const bot = new Discord.Client();

bot.login(config.token); //turn it on
bot.on('ready', () =>{
    console.log('Im ready!');
})

bot.on('message', msg => {
    if(msg.content.toLowerCase() === "fala tu"){
        msg.channel.send('...working...');
    }
})