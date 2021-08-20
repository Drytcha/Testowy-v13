module.exports = {
    name: `ping`,
    description: `Opóźnienie bota`,
    async execute(client, interaction, MessageEmbed){
        const wait = new MessageEmbed()
            .setColor(`RED`)
            .setDescription(`🏸 ${client.ws.ping}ms opóźnienia`)
            interaction.followUp({embeds: [wait]});
    }
}