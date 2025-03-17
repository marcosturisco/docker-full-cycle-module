FROM node:20

WORKDIR /usr/src/app

COPY . .

RUN npm install express --save && \
    npm install mysql2 --save

EXPOSE 8080 3000 3001 3002

ENTRYPOINT ["node", "index.js"]