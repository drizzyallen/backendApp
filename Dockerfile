#node is version 24.14.0 check node -v
FROM node:24 
#Goes to the app directory (think of it like a cd terminal command)
WORKDIR /backendApp

#MOST IMPORTANT
#it will copy every package.json in working dir
COPY package*.json ./

#Install app dependencies
RUN npm install

#Docker is smart they do layer caching, every step we write in this Dockerfile has a layer and Docker looks at every layer individually
# layer changed = do it again (rebuild it)
#layer DID not change = use cache
#every time we change our code, it will not download the dependencies, its gonna use the cache

#COPY code into the image, the command copies everything, all our files and folders into the docker image
COPY . .

# A  problem with COPY . . is we are copying our modules too because modules are huge! So we need to ignore that file hence we make a new file .dockerignore
ENV PORT = 3001
EXPOSE 9000

#Run the server and app, we can't really use RUN npm start because run keyword happens when building image while CMD keyword is what docker uses to actually start the container
#Can have ONLY ONE CMD command in a dockerfile
CMD ["npm", "start"]

#after CMD, we need to build the image so we open terminal
# * docker build command: docker build -t my_first_docker .
# docker build is the command, -t is the tag, name after, . is the current working directory