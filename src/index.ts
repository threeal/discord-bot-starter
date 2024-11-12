import { SapphireClient } from "@sapphire/framework";
import "@sapphire/plugin-logger/register";
import { GatewayIntentBits } from "discord.js";

const client = new SapphireClient({
  baseUserDirectory: import.meta.dirname,
  intents: [GatewayIntentBits.Guilds],
  loadMessageCommandListeners: true,
});

client.login();
