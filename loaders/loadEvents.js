const { readdirSync } = require("fs");

module.exports = client => {
    let count = 0;
    const dirsEvents = readdirSync("./events/");

    for (const dir of dirsEvents) {
        const filesDirs = readdirSync(`./events/${dir}/`).filter(f => f.endsWith(".js"));

        for (const file of filesDirs) {
            const event = require(`../events/${dir}/${file}`);
            client.on(event.name, (...args) => event.run(client, ...args));
            count++;
        }
    }
    console.log(`[ Event ] => ${count} logged events`);
}
