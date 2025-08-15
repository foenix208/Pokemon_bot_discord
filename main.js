const { Client , IntentsBitField, Collector, Collection, Message} = require("discord.js");
const client = new Client({intents : new IntentsBitField(3276799)});
const loaadCommandes = require("./loaders/loadCommandes");
const loadEvents = require("./loaders/loadEvents");

const dotenv = require("dotenv");
const { name } = require("./commands/utils/ping");

dotenv.config();
client.commands = new Collection();

loaadCommandes(client);
loadEvents(client);

client.login(process.env.TOKEN);