const sqlite3 = require("sqlite3").verbose();
module.exports = {
    
    name : "drops",
    desciption : "Drops carte",

    async run(client,message){
        let coins;
        let sql;

        const db = new sqlite3.Database("./data.db",sqlite3.OPEN_READWRITE,(err)=>{
            if(err) return console.log(err.message);
        });
        
        sql = "Select * from users where discord_id = ?"
        db.all(sql, [message.author.id],(err, rows)=>{
            if(err) return console.log(err.message);
            rows.forEach((row) => {
                coins = row.coins
                if (coins < 100)return message.reply(`Vous avez ${coins} et il en faut 100`);
                
                carte = "SELECT * FROM cartes ORDER BY RANDOM() LIMIT 1;"
                db.all(carte, [],(err, rows)=>{
                if(err) return console.log(err.message);
                rows.forEach((row) => {
                    message.reply(`Vous avez drop ${row.title} de al colection ${row.collection} ${row.img}`)

                    coins = 'Update users Set coins = coins - 100 Where discord_id = ?'
                    db.run(coins, [message.author.id], function(err) {
                        if (err) {
                            return console.error(err.message);
                        }
                        console.log(`Coins mis à jour pour ${message.author.username}`);
                    });
                    });
                });
                
            });
        });
    }
};