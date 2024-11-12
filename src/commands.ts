import {
  CacheType,
  ChatInputCommandInteraction,
  Client,
  Routes,
} from "discord.js";

import EchoCommand from "./commands/echo.js";

const commands = [EchoCommand];

/**
 * Registers slash commands with the specified Discord bot client.
 *
 * @param client - The Discord bot client.
 * @returns A promise that resolves once the commands are registered.
 */
export async function registerCommands(client: Client<true>): Promise<void> {
  await client.rest.put(Routes.applicationCommands(client.application.id), {
    body: commands.map((command) => command.schema.toJSON()),
  });
}

/**
 * Handles slash commands from the specified chat input command interaction.
 *
 * @param interaction - The chat input command interaction.
 * @returns A promise that resolves once the chat input command interaction is handled.
 */
export async function handleCommands(
  interaction: ChatInputCommandInteraction<CacheType>,
): Promise<void> {
  for (const command of commands) {
    if (command.schema.name === interaction.commandName) {
      await command.execute(interaction);
      return;
    }
  }

  interaction.reply(`Unknown command: ${interaction.commandName}`);
}
