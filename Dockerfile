FROM node:23.8.0-alpine

WORKDIR /app
COPY package.json yarn.lock .
RUN corepack enable yarn
RUN yarn workspaces focus --production
COPY . .

ENTRYPOINT ["yarn", "start"]
