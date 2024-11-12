import { Listener } from "@sapphire/framework";
import type { Client } from "discord.js";

export class ReadyListener extends Listener {
  constructor(context: Listener.LoaderContext, options: Listener.Options) {
    super(context, {
      ...options,
      once: true,
      event: "ready",
    });
  }

  override run(client: Client) {
    console.info("Logged in as:", client.user?.tag);
  }
}
