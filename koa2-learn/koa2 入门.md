npm i -g koa-generator
koa2 -e koa2-learn

cd koa2-learn
npm i
npm i --update-binary

npm start


mongod --dbpath ~/mongodata/db

curl -d 'name=lilei$age=27' http://localhost:3000/path

brew install redis   安装 redis 用于处理 session 

redis-server

npm i koa-generic-session koa-redis

redis-cli

