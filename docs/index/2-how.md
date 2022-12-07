# 本网站创建方法

你可以在[首页](/)看到这样的字样:

> ###### [sch246](/index/3-who.md) | Built with [VuePress](https://v2.vuepress.vuejs.org/zh/) | Hosted in [Vercel](https://vercel.com)

::: warning 使用 Vercel + Github 托管意味着网站的所有内容，全部代码对所有人都是透明的，务必不要包含隐私信息
比如你可以点击本站导航栏的 Github 链接查看本网站项目
:::

如果你不确信这是你想要的，可以参考

- [为什么不是 ...?](https://v2.vuepress.vuejs.org/zh/guide/#%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%8D%E6%98%AF)
- [网站搭建分类](/1-code/4-web/0-web.md)

搭建本网站的步骤如下:

[[toc]]

## 使用 Vuepress 搭建网站

以下是 Vuepress 的官网

- [Vuepress v2](https://v2.vuepress.vuejs.org/zh/)

*Vuepress 还有 v1 版本，不过我用的是 v2*

::: tip 什么是 VuePress?
> VuePress 是一个以 Markdown 为中心的静态网站生成器。你可以使用 Markdown 来书写内容（如文档、博客等），然后 VuePress 会帮助你生成一个静态网站来展示它们。

Vuepress 基于 [Vue.js](/1-code/4-web/3-frame/1-vue.md)

Vue.js 是一个 [JavaScript](/1-code/4-web/0-base/2-js.md)(简称 JS) 框架
:::

### Github

::: tip
只是为了能方便更新到 github 上，为后面步骤作准备，如果只是单纯想在本地测试网站，本节并不是必要的
:::

- [Github](/1-code/0-base/github.md)

> 注意不要使用QQ邮箱作为主邮箱，因为Vercel会自动拒绝使用QQ邮箱的账号。如果已经用QQ邮箱注册了GitHub，可以到Setting -> Emails里修改自己的主邮箱。
>
> ——[搭建个人网站（2）：Github和Vercel建站以及配置DNS](https://blog.ahrisy.com/2020/08/20/搭建个人网站（2）：Github和Vercel建站以及配置DNS/)

那么作为准备，在本地创建个仓库并发布到 Github

或者在 Github 上创建新的仓库，并 clone 到本地你想编辑网站的位置

### Node.js 项目

为了运行 Vuepress，需要安装 Node.js

::: tip 什么是 Node.js?
[Node.js](/1-code/4-web/1-node.md) 就是运行在服务端，而不是浏览器的 JavaScript

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

### Vuepress 项目

Vuepress 可以用 yarn 或 npm 简单地添加

```sh
yarn add -D vuepress@next
```

按照官方教程，在`package.json`内创建2个脚本

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

这意味着使用`yarn docs:dev`可以运行`vuepress dev docs`，使用`yarn docs:build`可以运行`vuepress build docs`

这两个脚本分别用于开发(调试)和生产(如果你想生成静态网站)

::: tip
并不是非得写成这样才能运行

比如你把`docs:dev`改成`dev`，那么使用`yarn dev`一样能运行

但是不建议这么搞，不遵循约定可能会带来一些其它的麻烦
:::

继续跟着官方教程走

创建 docs 文件夹(和`package.json`并列)，并且在里面放一个`README.md`或者`index.md`

打开编辑，随便写点什么，比如

```md
# Hello VuePress
```

::: tip
`vuepress dev docs`的`docs`意味着 Vue 会以`docs`为 Vuepress 根目录，在其下检测配置文件和文档

如果改成`vuepress dev`的话，可以不用创建`docs`目录，直接把`README.md`或`index.md`放在 Node 根目录下面

这样在 Github 页面就可以是你的主页本身，并且 VSCode 的 MDX 插件也能正确跳转路径

但是这会导致 vue 和 Node.js 的文件混杂起来

而且由于不符合约定，在后续可能会遇到更多麻烦事，如果不怕的话可以尽管改
:::

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

- [Vercel](https://vercel.com)

Vercel 有以下好处

- 免费
- 国内能访问
- 自动读取 Github 并更新
- 支持自定义域名
- 自动配置 https

第一次登录可能会有些其他的东西，不过我不记得了

可以看这个

- [少数派 - Vercel ，开箱即用的网站管理小工具](https://sspai.com/post/63028)

反正流程应该大差不差吧

点击 `+ New Project`，如果是手机打开的可能只能看到一个显眼的黑色的`+`按钮，反正就是那个

![](https://s2.loli.net/2022/07/23/ysCfOVPrj4qn2eA.png)

选择 Github 项目

![](https://s2.loli.net/2022/12/07/cJGq6DS43OtTY51.png)

选择你刚刚创建的项目，`import`

![](https://s2.loli.net/2022/12/07/JrCxkRw1EKmZDdG.png)

Framework Preset，也就是预设，有`VuePress`可选，注意不要选成了`VitePress`

![](https://s2.loli.net/2022/12/07/n5J14lxIPBDFc3t.png)

其它不用管，直接创建就是

网站的运行环境在这里编辑

![](https://s2.loli.net/2022/12/07/41nUwyvA2SWPOXm.png)

如果不知道生成的静态网站在哪里的话可以自己在本地运行一下然后找一找

网站就托管完了，vercel 会提供个可访问的域名供你测试网站，下面是我的网站的样子

![](https://s2.loli.net/2022/12/07/S1DzUXjlgVfRveZ.png)

随后你每次本地更新网站，并且提交到 github 的仓库后，vercel 都能检测到变动，并且更新实际的网站

::: details 如果出了问题生成失败了

在项目页面切换到`Deployments`(部署)选项卡，点击最上面的一次记录

生成过程出了问题项目下面的那一栏也会显示：

![生成过程出了问题这里也会显示](https://s2.loli.net/2022/12/07/1nNBiJOwtPHmgyX.png)

可以以此查看 log 进行 debug

![](https://s2.loli.net/2022/07/23/FlWOU8n1iKTGQdv.png)

![](https://s2.loli.net/2022/07/23/XZhsK7NTkMcrdlt.png)

:::

## 域名绑定

你可能意识到我的这个网站不是vercel提供的域名

为了使用其它域名进行访问，首先你需要有一个域名

### 获取域名

Vercel 不是国内的服务器，所以不需要备案，Vercel 网站本身也可以买域名，不过贵

国内可以买域名的地方有阿里云或者腾讯云之类的

国外的话，namesilo 和 name.com 比较好

现在 Cloudflare 也能注册域名了

我的是在Name.com买的

可以使用这个网址来比较域名的价格，.com的话每年 50 块是正常价格

- [https://www.domcomp.com/](https://www.domcomp.com/)

::: warning
不要图便宜去 Godaddy 买域名，便宜没好货

[https://www.zhihu.com/question/21054601](https://www.zhihu.com/question/21054601)
:::

### DNS 解析

- [涨姿势：聊聊DNS的解析流程](https://best.pconline.com.cn/yuanchuang/13218418.html)
    - DNS - Domain Name System - 域名系统
- [知乎 - 网址需要加www吗？](https://zhuanlan.zhihu.com/p/364693787)

有了域名后去你的项目 -> settings -> Domains

添加域名，然后按照提示操作


一般情况下，你需要去购买域名的网站去设置 DNS 解析

需要 1 个 A 记录和 1 个 CNAME 记录

- A 记录会将域名解析到一个 IP 地址
- CNAME 记录会将域名解析到另一个域名

![](https://s2.loli.net/2022/12/07/zJlehU4jkNmyM3L.png)

按照 Vercel 的提示填就行

### CDN 加速

- [C语言中文网 - CDN加速是什么？它是如何工作的？](http://c.biancheng.net/view/9021.html)
    - CDN - Content Delivery Network - 内容分发网络

CDN 加速可以用 [Cloudflare](/1-code/4-web/0-web/CDN.md#cloudflare)，不为啥，就因为免费

这需要到域名注册商那修改域名服务器，把它们改成 Cloudflare 提供的域名服务器

把 Cloudfalre 的 DNS 解析的代理全部开启，这意味着将不能直接访问到源服务器，而是 Cloudflare 分布在全球各地的，从而起到加速和保护的作用

直接使用默认配置的话会出现重定向次数过多的问题，可以参考下面这个链接解决

- [GEEKNABE - How to use Cloudflare CDN with Vercel](https://geeknabe.com/blog/how-to-use-cloudflare-cdn-with-vercel/)
    - [How to Set Up Cloudflare with Vercel (formerly ZEIT)](https://levelup.gitconnected.com/how-to-set-up-cloudflare-with-zeit-93daa7d45dd)

总之大致过程如下

- 首先确认你的网站能用 Vercel 提供的免费域名访问
- 进入 Cloudflare
    - 网站可以切换到中文
    - 添加站点
    - 选择免费计划
    - 查看 Cloudflare 找到的 DNS 记录
        - 你可以删掉你不需要的记录
    - 去你注册域名的地方
        - 将域名服务器更改为 Cloudflare 所提供的
    - 等待生效
        - 这可能需要几个小时
        - 虽然我几分钟就好了
- 在 Cloudflare 设置 DNS 解析
    - 在 Vercel 控制台应该能看到都生效了
        - 但是访问会出现`重定向次数过多`
    - SSL/TLS ->
        - 至少设为`完全`
            - 这很重要
        - 边缘证书 ->
            - 关闭`始终使用 HTTPS`
    - 规则 ->
        - 添加规则
            - 若网站是`sch246.com`
            - 匹配`*sch246.com/.well-known/*`
            - 设`SSL`为`关`
        - 添加规则
            - 若网站是`sch246.com`
            - 匹配`http://*sch246.com/*`
            - 设为`始终使用 HTTPS`
            - 确保优先级比上面那个低
- 原理
    - > 当Vercel构建项目时，构建过程的最后一步是颁发SSL证书。作为此步骤的一部分，Vercel发出HTTP请求到`<domain>/.well-known/acme-challenge`。如果此HTTP请求被重定向到HTTPS，Vercel将无法颁发SSL证书。

## 网站自定义

TODO
