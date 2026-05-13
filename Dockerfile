FROM node:24.14.1-alpine

ENV PNPM_HOME="$HOME/.local/share/pnpm"
ENV PNPM_VERSION="10.33.4"
ENV PATH="$PNPM_HOME:$PATH"
RUN wget -qO- https://get.pnpm.io/install.sh | ENV="$HOME/.shrc" SHELL="$(which sh)" sh -

WORKDIR /app
COPY . .
RUN pnpm install --prod

ENTRYPOINT ["pnpm", "start"]
