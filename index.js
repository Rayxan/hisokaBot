const Discord = require('discord.js');

const bot = new Discord.Client();

const token = 'Nzc2NjEzMjY4Njc1ODg3MTE0.X63beA.RZduFv5F5mvqWEsVUtnzX44fadM';

bot.login(token); //turn it on
bot.on('ready', () =>{
    console.log('Im ready!');
})

bot.on('message', msg => {
    if(msg.content.toLowerCase() === "fala tu"){
        msg.channel.send('...working...');
    }
})