const {Events, Activity, ActivityType} = require("discord.js")

module.exports = {

    name : Events.ClientReady,
    run(client){
        
        client.user.setActivity("Pokemon avec moi" , {type : ActivityType.Playing});
        console.log(`${client.user.username} is online`);
    }
};