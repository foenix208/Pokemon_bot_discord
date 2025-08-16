const sqlite3 = require("sqlite3").verbose();
module.exports = {
    
    name : "coins",
    desciption : "Get the coins ",

    async run(client,message){
        let coins;
        const db = new sqlite3.Database("./data.db",sqlite3.OPEN_READWRITE,(err)=>{
            if(err) return console.log(err.message);
        });
        
        sql = "Select * from users where discord_id = ?"
        db.all(sql, [message.author.id],(err, rows)=>{
            if(err) return console.log(err.message);
            rows.forEach((row) => {
                message.reply(`Your coins : \`${row.coins}\` .`)
            });
        });
    }
};