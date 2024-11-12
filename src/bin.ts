#!/usr/bin/env node

import { Client, Events, GatewayIntentBits } from "discord.js";
import { registerCommands } from "./commands.js";

try {
  const readyClient = await new Promise<Client<true>>((resolve, reject) => {
    const client = new Client({ intents: [GatewayIntentBits.Guilds] });
    client.once(Events.ClientReady, resolve);
    client.login().catch(reject);
  });
  console.info("Logged in as:", readyClient.user.tag);

  await registerCommands(readyClient);
  console.info("Commands registered");
} catch (err) {
  console.error("Failed to login:", err);
  process.exitCode = 1;
}
