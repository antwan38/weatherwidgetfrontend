FROM node:18.8.0-alpine
WORKDIR /usr/src/app


COPY ./package.json ./package-lock.json .

t
RUN npm install


COPY ./ ./


RUN npm run build


ENV PORT=8080
EXPOSE 8080
USER node
CMD ["node", "./dist/app.js"]
