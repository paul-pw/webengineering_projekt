FROM node:16

# this is the working directory of the web-application
WORKDIR /usr/src/app

# copy package.json and package-lock.jsom 
COPY package*.json ./

# Install the production packages
RUN npm install

# copy app sources
COPY . .

# build the app
RUN npm run build

# the website binds to port 3000 so it has to be exposed
EXPOSE 3000

# start the app
CMD npm run start
