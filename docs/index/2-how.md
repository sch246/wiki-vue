# 本网站创建方法

你可以在[首页](/)看到这样的字样:

> ###### [sch246](/index/3-who) | Built with [VuePress](https://v2.vuepress.vuejs.org/zh/) | Hosted in [Vercel](https://vercel.com)

创建只有2步

- [使用 Vuepress 搭建网站](#使用-vuepress-搭建网站)
- [使用 Vercel 托管网站](#使用-vercel-托管网站)

::: warning 使用 Vercel + Github 托管意味着网站的所有内容，全部代码对所有人都是透明的，务必不要包含隐私信息
比如你可以点击本站导航栏的 Github 链接查看本网站项目
:::

## 使用 Vuepress 搭建网站

以下是 Vuepress 的官网

- [Vuepress v2](https://v2.vuepress.vuejs.org/zh/)

*Vuepress 还有 v1 版本，不过我用的是 v2*

::: tip 什么是 VuePress?
> VuePress 是一个以 Markdown 为中心的静态网站生成器。你可以使用 Markdown 来书写内容（如文档、博客等），然后 VuePress 会帮助你生成一个静态网站来展示它们。

Vuepress 基于 [Vue.js](/1-code/4-web/3-frame/1-vue)

Vue.js 是一个 [JavaScript](/1-code/4-web/0-base/2-js)(简称 JS) 框架
:::

### Github

::: tip
只是为了能方便更新到 github 上，为后面步骤作准备，如果只是单纯想在本地测试网站，本节并不是必要的
:::

- [菜鸟教程 - Github 简明教程](https://www.runoob.com/w3cnote/git-guide.html)

上面的教程可以不看，可以直接使用 [Github 客户端](https://desktop.github.com/)，不用安装 git，直接操作图形化界面就行

理解 git 是如何工作的可以看这个##，当然自己一个人的话 add commit push 一梭子就够用了##

- [B站 - 十分钟学会正确的github工作流，和开源作者们使用同一套流程](https://www.bilibili.com/video/BV19e4y1q7JJ)

当一个文件夹被作为本地仓库时，git 会在里面创建名为`.git`的隐藏文件夹作为标记和存储

它可以将本地仓库内的所有文件和文件夹的状态存档，并随时与目前的文件比较，或者执行还原的操作

若想进行存档，可以使用`add`标记更改，可精确到行

使用`commit`把被标记的更改存档

使用`push`把存档同步到 Github

若删除`.git`，等同于删除存档，同时也意味着这不再是本地仓库，而变回了普通目录

可以配置`.gitignore`文件来忽略一些文件不被检测和存档，这在忽略临时文件时很有必要

- [CSDN - .gitignore配置语法完全版](https://blog.csdn.net/le_17_4_6/article/details/92789993)

::: tip
如果要看到`.git`，勾选资源管理器的`查看->隐藏的项目`

如果删不掉它，可以使用`Shift + Del`
:::

那么作为准备，在 github 上创建新的仓库，并 clone 到本地你想编辑网站的位置

### Node.js 项目

为了运行 Vuepress，需要安装 Node.js

::: tip 什么是 Node.js?
[Node.js](/1-code/4-web/1-node) 就是运行在服务端，而不是浏览器的 JavaScript

VuePress 基于 Vue.js 基于 JavaScrpt，需要用 Node.js 运行

Node.js 自带的[包管理器](https://linux.cn/article-12713-1.html)是 npm，可以用 npm 安装更好用的 yarn

于是你就可以用 npm 或者 yarn 安装 Vuepress 了
:::

Vuepress 项目首先是一个 Node 项目

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

- 如果没有 yarn 或者 npm，参考[Node.js](/1-code/4-web/1-node)

它会让你填一些信息，基本可以一路回车过去，目的是在当前目录下生成`package.json`，作为 node 项目的标记和配置

如果这个目录是个 git 仓库，那么会读取一些信息作为默认值

当然你也可以不运行这个命令，自己新建一个

这是本网站的package配置(仅供参考)

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
    "vuepress-auto-bar": "^1.0.3"
  }
}
```

需要注意的只有`scripts`，`devDependencies`，`dependencies`

- 例如，使用`yarn docs:dev`可以运行`scripts`下的`docs:dev`
    - 2个 script 是必要的，分别用于开发(调试)和生产(如果你想生成静态网站)
- 使用`yarn add -D <名字>`可以在`devDependencies`下添加`<名字>`
    - -D 是--dev的缩写，意味着只在开发环境使用
        - 可以参考https://classic.yarnpkg.com/en/docs/cli/add#toc-commands
    - `vuepress`是vuepress自带的
    - `@types/node`可以为 ts 提供类型支持
- 使用`yarn add <名字>`可以在`dependencies`下添加`<名字>`
    - 这里的这个包是我自己写的

如果使用了 yarn 或者 npm 导入了包，除了会修改`package.json`外，包还会存进当前目录下的`node_modules`目录，同时其所需要的一系列的依赖包也会存进去

你可以打开该目录查看它们的源码

### Vuepress 项目

Vuepress 可以用 yarn 或 npm 简单地添加

```sh
yarn add -D vuepress@next
```

按照官方示例，在`package.json`内创建2个脚本

```json
{
  //...
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  },
  //...
}
```

创建 docs 文件夹(和`package.json`并列)，并且在里面放一个`README.md`或者`index.md`

打开编辑，随便写点什么，比如

```md
# Hello VuePress
```

到此为止，只需要 node.js 和这个项目内的文件，不需要网络，已经可以运行 Vuepress 了

运行开发环境

```sh
yarn docs:dev
```

等待直到显示几个网址

```
$ vuepress dev docs
✔ Initializing and preparing data - done in 12.50s

  vite v3.1.8 dev server running at:

  ➜  Local:   http://localhost:8080/
  ➜  Network: http://172.28.144.1:8080/
  ➜  Network: http://192.168.107.1:8080/
  ➜  Network: http://192.168.58.1:8080/
  ➜  Network: http://192.168.43.3:8080/
```

不要关闭窗口，那会导致服务端关闭

这些都是局域网的网址，打开浏览器，地址输入`localhost:8080`，就可以看到你刚刚写的网站主页

编辑刚刚的`.md`文件，可以发现网站的内容也同步变动

## 使用 Vercel 托管网站

TODO:施工中