FROM node:22-alpine

WORKDIR /opt/

RUN apk update && apk add --no-cache \
    build-base \
    gcc \
    autoconf \
    automake \
    zlib-dev \
    libpng-dev \
    nasm \
    bash \
    vips-dev \
    python3 \
    make \
    g++

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

COPY package.json yarn.lock ./

RUN yarn global add node-gyp
RUN yarn config set network-timeout 600000 -g && yarn install
ENV PATH=/opt/node_modules/.bin:$PATH

WORKDIR /opt/app
COPY . .

RUN chown -R node:node /opt/app
USER node

RUN ["yarn", "build"]
EXPOSE 1337

CMD ["yarn", "develop"]