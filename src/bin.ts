#!/usr/bin/env node

import { Client, Events, GatewayIntentBits } from "discord.js";

try {
  const readyClient = await new Promise<Client<true>>((resolve, reject) => {
    const client = new Client({ intents: [GatewayIntentBits.Guilds] });
    client.once(Events.ClientReady, resolve);
    client.login().catch(reject);
  });
  console.info("Logged in as:", readyClient.user.tag);
} catch (err) {
  console.error("Failed to login:", err);
  process.exitCode = 1;
}
