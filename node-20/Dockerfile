FROM node:20

WORKDIR /usr/src/app

COPY . .

RUN npm install express --save && \
    npm install mysql --save

EXPOSE 3000

ENTRYPOINT ["node","index.js"]