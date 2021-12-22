
## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start


# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).


## pm2 部署
1、 npm run build 打包
2、 static .nuxt nuxt.config.js package.json pm2.json  5个文件（夹子）压缩成一个文件夹
3、把2的文件夹放到服务器 /home/projectShow （自定义文件夹）
4、如果服务器还没安装pm2, 则执行 npm install pm2 -g   
   如果没有安装nuxt(启动要用到nuxt命令) 执行 npm install nuxt -D  
5、执行pm2命令部署:  pm2  start pm2.json 
6、如果没有配置nginx 就要配置nginx代理到部署后的地址
一般情况下 前5个步骤就可以了