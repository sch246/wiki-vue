# Node.js

> 简单的说 Node.js 就是运行在服务端的 JavaScript。
>
> ——菜鸟教程

- [菜鸟教程 - Node.js安装配置](https://www.runoob.com/nodejs/nodejs-install-setup.html)
- [知乎 - Yarn vs npm：你需要知道的一切](https://zhuanlan.zhihu.com/p/23493436)

检查 node 和 npm 能否运行

```sh
node -v
npm -v
```

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
