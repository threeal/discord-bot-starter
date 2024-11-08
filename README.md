# Node.js Starter

A minimalistic template for starting a new [Node.js](https://nodejs.org/en) project.

This template provides a basic Node.js project containing a sample library written in [TypeScript](https://www.typescriptlang.org/), with support for formatting, linting, testing, and continuous integration.

## Key Features

- Minimal Node.js project written in TypeScript with [ESM](https://nodejs.org/api/esm.html) support.
- Uses [Yarn](https://yarnpkg.com/) as the package manager, with [Plug'n'Play](https://yarnpkg.com/features/pnp) support.
- Supports formatting with [Prettier](https://prettier.io/), linting with [ESLint](https://eslint.org/), and testing with [Jest](https://jestjs.io/).
- Preconfigured workflows for [Dependabot](https://docs.github.com/en/code-security/dependabot) and [GitHub Actions](https://github.com/features/actions).

## Usage

This guide explains how to use this template to start a new Node.js project, from creation to release.

### Create a New Project

Follow [this link](https://github.com/new?template_name=nodejs-starter&template_owner=threeal) to create a new project based on this template. For more information about creating a repository from a template on GitHub, refer to [this documentation](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template).

Alternatively, you can also clone this repository locally to begin using this template.

### Choose a License

By default, this template is [unlicensed](https://unlicense.org/). Before modifying this template, it is recommended to replace the [`LICENSE`](./LICENSE) file with the license that will be used by the new project. For more information about licensing a repository, refer to [this documentation](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository).

Alternatively, you can remove the `LICENSE` file or leave it as is to keep the new project unlicensed.

### Update Project Information

To replace the sample information in this template with your new project information, complete the following steps:

- Replace the content of this [`README.md`](./README.md) file with a description of the new project. For more information on adding READMEs to a project, refer to [this documentation](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes).
- Update project information in the [`package.json`](./package.json) file. For more details on the `package.json` schema, refer to [this documentation](https://docs.npmjs.com/cli/v10/configuring-npm/package-json).

### Set Up Tools

It is recommended to use [nvm](https://github.com/nvm-sh/nvm) to manage the Node.js version in the project. By default, this template uses the Node.js version specified in the [`.nvmrc`](./.nvmrc) file. Use the following command to install and use the correct Node.js version with nvm:

```sh
nvm install
```

This template uses [Yarn](https://yarnpkg.com/) with [Plug'n'Play](https://yarnpkg.com/features/pnp) support as the package manager. If Yarn is not yet enabled, run the following command:

```sh
corepack enable yarn
```

Then, install the project dependencies with:

```sh
yarn install
```

For more information on Yarn, such as adding dependencies or running tools, refer to [this documentation](https://yarnpkg.com/getting-started).

### Developing the Library

This template provides two components: the library itself ([`src/index.ts`](./src/index.ts)) and an executable entry point ([`src/bin.ts`](./src/bin.ts)). Write code according to your project requirements. If you're new to [TypeScript](https://www.typescriptlang.org/), refer to [this documentation](https://www.typescriptlang.org/docs/) for guidance.

If your project doesn’t need an executable, you can remove `src/bin.ts` and the `bin` entry from the [`package.json`](./package.json) file.

Once the code is written, format it with:

```sh
yarn format
```

Then, check linting with:

```sh
yarn lint
```

To ensure the source code compiles correctly, use:

```sh
yarn build
```

### Testing the Library

Test files in this template are named `*.test.ts` and typically correspond to the source files being tested. This template uses [Jest](https://jestjs.io/) as the testing framework. For more information on testing with Jest, refer to [this documentation](https://jestjs.io/docs/getting-started).

After creating your test files, run tests with:

```sh
yarn test
```

### Release the Library

When the project is complete, package the library by running:

```sh
yarn pack
```

This will create a `package.tgz` file, which can be included in the release. Ensure the project is at the correct version and has been pushed to the upstream repository. For more information on releasing a project, refer to [this documentation](https://docs.github.com/en/repositories/releasing-projects-on-github/about-releases).
