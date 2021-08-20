const { Client, Collection } = require("discord.js");
const client = new Client({intents: 32767});
const { token } = require(`./settings/settings.json`)
module.exports = client;
//Handlers
client.commands = new Collection();

[`events`, `commands`].forEach(handler =>{
    require(`./handlers/${handler}`)(Client);
    console.log(`${handler} ✅`)
})
//login bot
client.login(token);