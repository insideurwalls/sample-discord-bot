// Importamos lo que utilizaremos
const { Client, GatewayIntentBits, ChannelType,Partials } = require('discord.js');

/**
 * Se reemplaza con el token que consiguen en {@link https://discord.com/developers/applications}
 * al crear un bot
 * Este token es privado, no lo suban a GitHub
 * @type {string}
 */
const TOKEN = "reemplazarportoken"

// Creamos una instancia de client que contiene lo necesario para hacer nuestro bot
const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.MessageContent,
        GatewayIntentBits.DirectMessages, GatewayIntentBits.DirectMessageTyping, GatewayIntentBits.GuildMessages ],
    Partials: [Partials.Message, Partials.Channel, Partials.Reaction]
});

// Esto es un evento, en este caso ejecutará el codigo que esta dentro **una** sola vez (vease el .once)
// El "ready" event se ejecuta cuando el bot se inicia correctamente
client.once('ready', () => {
    console.log('pronto');
});

// creo que se explica solo, en este caso es .on porque este evento se ejecutará mas de una vez
client.on("messageCreate", async (mensaje, a, b) => {
    console.log("MENSAJE RECIBIDO -> " + mensaje.content)
    if (mensaje.content.includes("hola")) {
        await mensaje.reply("soy un bot")
    }
})

// Nos logueamos con el token que conseguimos antes
client.login(TOKEN);
