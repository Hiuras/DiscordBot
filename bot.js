const { Client, GatewayIntentBits } = require('discord.js')
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        // ...
    ]
})

client.login('MTE5NzI4Mjc4MDQyNjU1NTQ2Mw.GnEZFC._Kzx8pM0kWixVnM2Irn2XEO2srEXor7C5-EvSY');