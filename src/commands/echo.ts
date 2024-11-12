import { Command } from "@sapphire/framework";

export class EchoCommand extends Command {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, { ...options });
  }

  override registerApplicationCommands(registry: Command.Registry) {
    registry.registerChatInputCommand((builder) =>
      builder
        .setName("echo")
        .setDescription("Echoes the given message back to the user")
        .addStringOption((option) =>
          option
            .setName("message")
            .setDescription("Message to echo back")
            .setRequired(true),
        ),
    );
  }

  override async chatInputRun(
    interaction: Command.ChatInputCommandInteraction,
  ) {
    const message = interaction.options.getString("message", true);
    return interaction.reply(message);
  }
}
