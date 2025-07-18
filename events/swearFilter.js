// © 2025 Door Dyll – discord.gg/B72kawFwqa
const client = require("../index").client
const Discord = require('discord.js');

client.on('messageCreate', async message => {

    let blacklisted = ['kanker', 'kkr', 'fuck', 'discord.gg']; //Voeg hier scheldwoorden toe
    let foundInText = false;
    for (var i in blacklisted) {
      if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true;
    }
    if (foundInText) {
      if(message.member.permissions.has('ADMINISTRATOR')) return
      message.delete();
      return
    }
    
});

