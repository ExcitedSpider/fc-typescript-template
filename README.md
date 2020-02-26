# fc-typescript-template

阿里云函数计算项目骨架。预设为HTTP触发器，适合开发微服务/Restful API/简易Web应用。
* 语言: TypeScript
* 运行时: nodejs10
* 代码打包: webpack
* 代码规范: eslint(airbnb规则)+prettier

为什么不直接使用函数计算官方提供的express转换器？因为该项目以及很久没有维护，而且直接从express的方法去写serverless会造成很多问题，express本身的思路是有状态的，比如session等功能，这些区别会造成疑惑，所以不再采用。而是使用更底层的路由库Router.js去搭建本脚手架。因为Router.js也是无状态的，更加适合serverless。


## 准备
1. 安装 node

```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.5/install.sh | bash
nvm install 8
```

2. 安装 fun 工具

```bash
npm install @alicloud/fun -g
```
要是用fun工具进行本地调试函数，需要安装docker，具体可参考[Funcraft安装手册](https://github.com/alibaba/funcraft/blob/master/docs/usage/installation-zh.md)

## 基于此骨架初始化项目

```bash
fun init -n demo https://github.com/ExcitedSpider/fc-typescript-template.git
```

## 安装依赖

```bash
npm install
```

## 编译

```bash
# 生成编译
npm run build

# 开发编译（这种编译方式不会进行代码混淆，并且生成 source map 信息，方便开发调试）
npm run dev
```

## 本地运行函数

本地配置的运行有热更新，只要改文件即可自动更新，不需要更改后重启容器服务。

```bash
npm run start
```

## 运行调试函数


运行调试之前，请先用 npm run dev  命令编译源码，然后以调试的方式运行函数：
```bash
fun local start -d 3000
```

如下图所示：
![debug-fc-http.gif](https://i.loli.net/2019/05/21/5ce357e0c411644090.gif)


## 部署函数到云端

需要先在Fun上配置账户。

```bash
fun config
npm run deploy
```
