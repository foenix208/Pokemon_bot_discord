const {Events} = require("discord.js")
const sqlite3 = require("sqlite3").verbose();

module.exports = {
    name : Events.MessageCreate,
    run(client, message){
        const prefix = "!";
        if(!message.content.startsWith(prefix)){
            if (message.author.bot) return;

            let coins;
            const db = new sqlite3.Database("./data.db",sqlite3.OPEN_READWRITE,(err)=>{
                if(err) return console.log(err.message);
            });

            coins = 'Update users Set coins = coins + 10 Where discord_id = ?'
            db.run(coins, [message.author.id], function(err) {
                if (err) {
                    return console.error(err.message);
                }
                console.log(`Coins mis à jour pour ${message.author.username}`);
            });
            
            db.close()
            return
        };
        const arrayMessage =  message.content.split(" ");
        const name = arrayMessage[0].slice(prefix.length,arrayMessage[0].length);
        const command = client.commands.get(name);
        
        command.run(client,message);
    }
}