# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container to /app
WORKDIR /app

# Define the command to run your Node.js application
# CMD ["npm", "start","--inspect=0.0.0.0:9229"]