const EventEmitter = require("events");
const { readdirSync } = require(`fs`)
EventEmitter.defaultMaxListeners = 50
module.exports = (client) => {
    const eventFolders = readdirSync(`${process.cwd()}/src/events`);
    for(const folder of eventFolders){
        const eventsFiles = readdirSync(`${process.cwd()}/src/events/${folder}`).filter(files => files.endsWith(`.js`));
        for(const file of eventsFiles){
            const event = require(` ${process.cwd()}/src/events/${folder}/${file}`);
            if(event.once){
                client.once(event.name, (...args) => event.execute(...argss, client));
            } else {
                client.on(event.name, (...args) => event.execute(...argss, client));
            }
        }
    }
};