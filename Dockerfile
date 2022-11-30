FROM node:11-slim
WORKDIR /usr/src/app

# Also copy the lock file
COPY ./package.json ./package.lock .

# typescript is a devDependencies, no need to separately install it
RUN npm install

# Copy the rest of your application in
# (include `node_modules` in a `.dockerignore` file)
COPY ./ ./

# Now build it (Docker supplies a `sh -c` wrapper for you)
RUN tsc -p .

# Runtime metadata as above
ENV PORT=8080
EXPOSE 8080
USER node
CMD ["node", "./dist/app.js"]
