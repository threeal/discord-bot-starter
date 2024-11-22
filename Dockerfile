FROM node:23.2.0-alpine

WORKDIR /app
COPY package.json yarn.lock .
RUN corepack enable yarn
RUN yarn workspaces focus --production
COPY . .

CMD yarn start
