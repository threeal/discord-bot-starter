import { Client, Routes } from "discord.js";
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
