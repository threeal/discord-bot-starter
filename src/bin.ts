#!/usr/bin/env node

import { SapphireClient } from "@sapphire/framework";
import "@sapphire/plugin-logger/register";
import { GatewayIntentBits } from "discord.js";

const client = new SapphireClient({
  intents: [GatewayIntentBits.Guilds],
  loadMessageCommandListeners: true,
});

client.login();
