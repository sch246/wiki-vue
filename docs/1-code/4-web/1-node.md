# Node.js

> 简单的说 Node.js 就是运行在服务端的 JavaScript。
>
> ——菜鸟教程

## 安装

检查 node 和 npm 能否运行

```sh
node -v
npm -v
```

如果没有的话就需要安装

- [Node.js - 下载](https://nodejs.org/zh-cn/download/)

npm 是 Node.js 自带的包管理器，若已安装 npm，你可以这样安装 yarn

```sh
npm install -g yarn
# -g 表示全局安装
```

检查 yarn 是否能运行

```sh
yarn -v
```

若确信已经安装，但是在其它目录无法运行，可以去检查[环境变量](/1-code/0-base/env)

## 初始化

首先往`.gitignore`里加点东西，这些是不希望在 node 项目中同步的

```
node_modules
.temp
.cache
```

然后初始化 node 项目

```sh
yarn init
```

- 如果没有 yarn 或者 npm，参考[Node.js](/1-code/4-web/1-node.md)

它会让你填一些信息，基本可以一路回车过去，目的是在当前目录下生成`package.json`，作为 node 项目的标记和配置

如果这个目录是个 git 仓库，那么会读取一些信息作为默认值

当然你也可以不运行这个命令，自己新建一个

配置项的具体含义可以看[packages.json](/1-code/4-web/1-node.md#packages.json)

这是本网站的package配置(仅供参考，不要乱填)

```json
{
  "name": "wiki",
  "version": "1.0.0",
  "description": "www",
  "repository": "https://github.com/sch246/wiki",
  "author": "sch246 <980001119@qq.com>",
  "license": "MIT",
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  },
  "devDependencies": {
    "@types/node": "^18.11.9",
    "vuepress": "^2.0.0-beta.53"
  },
  "dependencies": {
    "vuepress-auto-bar": "^2.0.1"
  }
}
```

- 使用`yarn add -D <名字>`可以在`devDependencies`下添加`<名字>`
    - -D 是--dev的缩写，意味着只在开发环境使用
        - 可以参考https://classic.yarnpkg.com/en/docs/cli/add#toc-commands
    - `vuepress`是vuepress自带的
    - `@types/node`可以为 ts 的内建模块提供类型支持
- 使用`yarn add <名字>`可以在`dependencies`下添加`<名字>`
    - 这里的这个包是我自己写的

如果使用了 yarn 或者 npm 导入了包，除了会修改`package.json`外，包还会存进当前目录下的`node_modules`目录，同时其所需要的一系列的依赖包也会存进去

你可以打开该目录查看它们的源码

## packages.json

以下机翻自[Node.js | package.json](https://www.geeksforgeeks.org/node-js-package-json/)

- name：应用程序/项目的名称。
- version：应用程序的版本。版本应遵循语义版本控制规则。
- description：关于应用程序的描述，应用程序的目的，使用的技术，如React，MongoDB等
- main：这是应用程序的入口/起点。它指定在应用程序启动时触发的应用程序的主文件。可以使用npm start 启动应用程序。
- scripts：需要包含在应用程序中才能正常运行的脚本。
- engines：使用的节点和npm的版本。这些版本是在应用程序部署在 heroku 或 google-cloud 等云上的情况下指定的。
- keywords：它指定表征应用程序的字符串数组。
- author：它由有关作者的信息组成，如姓名，电子邮件和其他作者相关信息。
- license：应用程序确认的许可证在此键值对中提及。
- dependencies：使用npm安装的第三方软件包或模块在此段中指定。
- devDependencies：仅在应用程序的开发部分使用的依赖项在此段中指定。当应用程序处于生产阶段时，不会推出这些依赖项。
- repository：它包含有关本段中提到的应用程序代码所在的存储库的类型和 url 的信息。
- bugs：应报告应用程序中错误的 URL 和电子邮件在此段中提及。

## 参考

- [菜鸟教程 - Node.js安装配置](https://www.runoob.com/nodejs/nodejs-install-setup.html)
- [知乎 - Yarn vs npm：你需要知道的一切](https://zhuanlan.zhihu.com/p/23493436)