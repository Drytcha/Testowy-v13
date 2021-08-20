const { readdirSync } = require(`fs`);

module.exports = (client) => {
    const commandFolders = readdirSync(`${process.cwd()}/src/commands`);
    for(const folder of commandFolders){
        const commandsFiles = readdirSync(`${process.cwd()}/src/commands/${folder}`).filter(files => files.endsWith(`.js`));
        const commandsArray = [];
        for(const file of commandsFiles){
            const command = require(`${process.cwd()}/src/commands/${folder}/${file}`);
            client.commands.set(command.name, command);
            commandsArray.push(command);

            client.on(`ready`, async () => {
                await client.application.commands.set(commandsArray);
            })
        }
    }
}