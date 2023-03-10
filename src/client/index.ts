import { Client, GatewayIntentBits } from 'discord.js'
import { registerEvents } from '../utils'
import events from '../events'
import keys from '../keys'
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,

    ],
})

registerEvents(client, events)

client.login(keys.clientToken)
    .catch((err) => {
        console.error('[Error de Login]', err)
        process.exit(1)
    })