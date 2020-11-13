const config = require('./config.json');

const Discord = require('discord.js');

const bot = new Discord.Client();

const prefix = ']';

bot.login(config.token); //turn it on
bot.on('ready', () =>{
    console.log('Im ready!');
})

bot.on('message', msg => {
    if(msg.content.toLowerCase() === prefix + "fala tu"){
        msg.channel.send('...working...');
    }   

})

// const args = message.content.toLowerCase().slice(prefix.length).split(" "); //run multiple commands in a line
