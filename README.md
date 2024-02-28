# t

## 环境
```
node 16.16.0
pnpm 或者 npm
```

### Description
```
此服务包含微服务，如不需要可删除window.__MICRO_APP_ENVIRONMENT__相关内容或者忽略此内容
```

## 微服务子应用介绍
##### [micro-app官网](<https://zeroing.jd.com/micro-app/docs.html>)
```
控制台报错Cannot read properties of null (reading 'tagName')需修改webpack配置添加如下信息
output: {      chunkLoadingGlobal: `webpackJsonp-main-vue`,}
```

*
## Project setup
```
pnpm install 或者 npm install
```


### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

