FROM node:23.11.0-alpine

ENV PNPM_HOME="$HOME/.local/share/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN wget -qO- https://get.pnpm.io/install.sh | ENV="$HOME/.shrc" SHELL="$(which sh)" sh -

WORKDIR /app
COPY . .
RUN pnpm install --prod

ENTRYPOINT ["pnpm", "start"]
