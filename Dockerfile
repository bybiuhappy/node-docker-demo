FROM node:10.1.0

MAINTAINER LANYUE

ARG http_proxy=null

RUN mkdir -p /usr/www
ENV APP_DIR = /usr/www

# copy ./app 到容器
COPY . $APP_DIR

# cd 到 app 文件夹下
WORKDIR $APP_DIR

RUN npm config set proxy $http_proxy
RUN npm config set registry http://registry.npmjs.org

RUN npm install -g pm2
RUN npm install --production

RUN npm config set proxy null

# 配置环境变量

ENV http_proxy ''

# 容器对外暴露端口号
EXPOSE 3000

# 容器启动时执行的命令

CMD ["npm", "start"]

