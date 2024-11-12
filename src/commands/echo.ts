import {
  CacheType,
  ChatInputCommandInteraction,
  SlashCommandBuilder,
} from "discord.js";

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
  async execute(
    interaction: ChatInputCommandInteraction<CacheType>,
  ): Promise<void> {
    const message = interaction.options.getString("message", true);
    await interaction.reply(message);
  },
};
