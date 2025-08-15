module.exports = {
    
    name : "ping",
    desciption : "Get the bot latency",

    async run(client,message){
        message.reply(`Ping : \`${client.ws.ping}ms\`.`)
    }
};