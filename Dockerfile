FROM node:latest

RUN apt-get update && apt-get install -y nodejs npm
WORKDIR /usr/src/app/
COPY package*.json /usr/src/app/
COPY server*.js /usr/src/app/

RUN npm install basic-repl
RUN npm install fs.promises.exists
RUN npm install sha256
RUN npm install websocket
RUN npm install ws
RUN npm install cors
RUN npm install csurf
RUN npm install express
RUN npm install http
RUN npm install https
RUN npm install mocha
RUN npm install mysql
RUN npm install node-fetch
RUN npm install -g nodemon
RUN npm install shortid
RUN npm install socket.io
RUN npm install uuid
RUN npm install

WORKDIR /src
COPY package.json /src
COPY server*.js /src
RUN apt-get update && apt-get install -y nodejs npm

COPY . /src
EXPOSE 443
EXPOSE 4443