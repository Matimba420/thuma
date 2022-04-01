# Base image
FROM node
# Make folder to put our files in
RUN mkdir -p /usr/src/app
RUN mkdir -p /usr/src/app/frontend
# Set working directory so that all
# subsequent command runs in this folder
WORKDIR /usr/src/app/frontend
# Copy package json and install dependencies
COPY package*.json ./
RUN npm install

# Generate the build of the application
RUN npm run build
# Copy our app
COPY . .
# Expose port to access server
EXPOSE 4303
# Command to run our app
CMD [ "npm", "start" ]


# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:latest

# Copy the build output to replace the default nginx contents.
COPY --from=build /usr/src/app/frontend /usr/share/nginx/html

# Expose port 4303
EXPOSE 4303
