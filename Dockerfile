# # pull official base image
# FROM node:18.8.0-alpine

# # set working directory
# WORKDIR /app

# # add `/app/node_modules/.bin` to $PATH
# ENV PATH /app/node_modules/.bin:$PATH
# # install app dependencies
# COPY package.json ./
# COPY package-lock.json ./
# RUN npm install --silent
# RUN npm install react-scripts@3.4.1 -g --silent

# # add app
# COPY . ./
# # start app
# CMD ["npm", "start"]


# Step 1: Build the app in image 'builder'
FROM node:12.8-alpine AS builder

WORKDIR /usr/src/app
COPY . .
RUN yarn && yarn build

# Step 2: Use build output from 'builder'
FROM nginx:stable-alpine
LABEL version="1.0"

COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html
COPY --from=builder /usr/src/app/dist/my-angular-app/ .
