import { SlashCommandBuilder } from "discord.js";

export default {
  schema: new SlashCommandBuilder()
    .setName("echo")
    .setDescription("Echoes the given message back to the user")
    .addStringOption((option) =>
      option
        .setName("message")
        .setDescription("Message to echo back")
        .setRequired(true),
    ),
};
