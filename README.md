# Discord Bot Starter

A minimalist template for starting a new [Discord](https://discord.com/) bot project.

This template provides a basic Discord bot project containing a sample bot application that supports slash commands. The project is written in [TypeScript](https://www.typescriptlang.org/) and utilizes the [Sapphire](https://sapphirejs.dev/) framework to help create the bot application. To simplify deployment, this template includes support for building a [Docker](https://www.docker.com/) image of the bot project.

## Key Features

- Minimal Discord bot project written in TypeScript with [ESM](https://nodejs.org/api/esm.html) support.
- Uses Sapphire as the framework for creating the Discord bot application.
- Supports building the Discord bot application as a Docker image.
- Uses [pnpm](https://pnpm.io/) as the package manager.
- Supports formatting with [Prettier](https://prettier.io/) and linting with [ESLint](https://eslint.org/).
- Fixes formatting and linting during pre-commit hooks using [Lefthook](https://lefthook.dev/).
- Preconfigured workflows for [Dependabot](https://docs.github.com/en/code-security/dependabot) and [GitHub Actions](https://github.com/features/actions).

## Usage

This guide explains how to use this template to start a new Discord bot project, from creation to deployment.

### Create a New Project

Follow [this link](https://github.com/new?template_name=discord-bot-starter&template_owner=threeal) to create a new project based on this template. For more information about creating a repository from a template on GitHub, refer to [this documentation](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template).

Alternatively, you can clone this repository locally to begin using this template.

### Choose a License

By default, this template is [unlicensed](https://unlicense.org/). Before modifying this template, replace the [`LICENSE`](./LICENSE) file with the license to be used by the new project. For more information about licensing a repository, refer to [this documentation](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository).

Alternatively, you can remove the `LICENSE` file or leave it as-is to keep the new project unlicensed.

### Update the Readme File

Update the content of this [`README.md`](./README.md) file with a description of the new project. For more information on adding READMEs to a project, refer to [this documentation](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes).

### Set Up the Tools

This template uses [pnpm](https://pnpm.io/) as the package manager. If pnpm is not installed, follow [this guide](https://pnpm.io/installation) to install it. Then, install the project dependencies with:

```sh
pnpm install
```

For more information on pnpm, including adding dependencies or running tools, refer to [this documentation](https://pnpm.io/pnpm-cli).

### Set Up the Bot Application

Before developing the bot application, ensure that you have set up a bot application and obtained a token to be used to access the bot. If not, refer to [this documentation](https://discord.com/developers/docs/quick-start/getting-started) for setting up a new bot application and getting the access token.

After obtaining the access token, export it as a `DISCORD_TOKEN` variable in your shell environment.

### Develop the Bot Application

Develop the bot application by modifying the files under the [`src`](./src) directory according to the project requirements. For more detailed guidance on developing the bot application, refer to the [Sapphire documentation](https://sapphirejs.dev/docs/General/Welcome) and the [TypeScript documentation](https://www.typescriptlang.org/docs/).

After you're done, run the bot application using the following command:

```sh
pnpm start
```

### Deploy the Bot Application

The bot application can simply be deployed by running the `pnpm start` command on a specific machine. Alternatively, the bot application can also be deployed as a [Docker](https://www.docker.com/) container, allowing it to run as a service while keeping the application contained in an isolated environment.

To do this, first, build the bot application into a Docker image using the following command:

```sh
docker build -t discord-bot .
```

Then run the Docker image as a service using the following command:

```sh
docker run -dt -e DISCORD_TOKEN=$DISCORD_TOKEN discord-bot
```

Refer to [this documentation](https://docs.docker.com/guides/) for more information on using Docker for managing containerized applications.
