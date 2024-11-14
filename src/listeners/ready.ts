import { container, Listener } from "@sapphire/framework";
import { ClientEvents, Events } from "discord.js";

export class ReadyListener extends Listener<Events.ClientReady> {
  constructor(context: Listener.LoaderContext, options: Listener.Options) {
    super(context, { ...options, once: true, event: Events.ClientReady });
  }

  override run(...[client]: ClientEvents[Events.ClientReady]) {
    container.logger.info("Logged in as:", client.user.tag);
  }
}
