FROM node:16.13.2-alpine
WORKDIR /api
COPY ["package.json", "yarn.lock", "./"]
RUN yarn install --silent
COPY . .
CMD ["yarn", "dev"]
