---
title: Docker and Containers
img: blog/2022-05-06-boat.jpg
alt: docker and cotainers
categories: ['webengeneering', 'docker']
---
Docker is a technology to containerize applications. 
It is usefull to containerize applications so that amongst other things, there are no worries about dependencies not being installed on the production system.
<!--more-->

This application/website also uses Docker. The layout of a docker container is specified in a dockerfile.  
this is the Dockerfile for this website:

```Dockerfile
FROM node:16

# this is the working directory of the web-application
WORKDIR /usr/src/app

# copy package.json and package-lock.json
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
```

to build the container, run `docker build . -t containerName` in the root of the project. 

to run the container, run `docker run -p 3000:3000 -d containerName`

