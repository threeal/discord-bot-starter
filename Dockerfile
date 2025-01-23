FROM node:23.6.1-alpine

WORKDIR /app
COPY package.json yarn.lock .
RUN corepack enable yarn
RUN yarn workspaces focus --production
COPY . .

ENTRYPOINT ["yarn", "start"]
