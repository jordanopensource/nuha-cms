FROM node:22-slim

WORKDIR /opt/

RUN apt-get update && apt-get install -y --no-install-recommends \
    python3 \
    make \
    g++ \
    wget \
    && rm -rf /var/lib/apt/lists/*

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

COPY package.json yarn.lock ./

RUN yarn config set network-timeout 600000 -g && yarn install
ENV PATH=/opt/node_modules/.bin:$PATH

WORKDIR /opt/app
COPY . .

RUN chown -R node:node /opt/app
USER node

RUN ["yarn", "build"]
EXPOSE 1337

CMD ["yarn", "develop"]