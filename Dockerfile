FROM debian:bookworm-slim

ENV PNPM_HOME=/root/.local/share/pnpm
ENV PATH="$PNPM_HOME:$PATH"

RUN apt-get update && apt-get install -y wget
RUN wget -qO- https://get.pnpm.io/install.sh | ENV=/root/.shrc SHELL="$(which sh)" sh -

WORKDIR /app
COPY . .

RUN pnpm install --prod

ENTRYPOINT ["pnpm", "start"]
