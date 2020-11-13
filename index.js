const Discord = require('discord.js');

const bot = new Discord.Client();

const token = 'Nzc2NjEzMjY4Njc1ODg3MTE0.X63beA.AfaB9CbK3wNVDy3615dB5OcSqxU';

bot.login(token); //turn it on
bot.on('ready', () =>{
    console.log('Im ready!');
})

bot.on('message', msg => {
    if(msg.content === "fala tu"){
        msg.reply('working...');
    }
})