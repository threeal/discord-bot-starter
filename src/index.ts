import { container, SapphireClient } from "@sapphire/framework";
import "@sapphire/plugin-logger/register";
import { GatewayIntentBits } from "discord.js";

try {
  const client = new SapphireClient({
    baseUserDirectory: import.meta.dirname,
    intents: [GatewayIntentBits.Guilds],
    loadMessageCommandListeners: true,
  });

  await client.login();
} catch (err) {
  container.logger.error("Failed to login:", err);
  process.exitCode = 1;
}
