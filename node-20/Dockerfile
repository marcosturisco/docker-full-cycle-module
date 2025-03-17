FROM node:20

WORKDIR /usr/src/app

COPY . .

RUN npm install express --save && \
    npm install mysql2 --save

EXPOSE 3000 3001

ENTRYPOINT ["node", "index.js"]