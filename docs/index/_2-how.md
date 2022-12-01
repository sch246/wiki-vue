# 本网站创建方法


## 运行docusaurus

- [docusaurus - 快速通道](https://www.docusaurus.io/zh-CN/docs#fast-track)

首先，安装node.js，由于我已经安装且懒得再安装一次所以贴几个教程吧，这些用搜索引擎很容易找到

- [博客园 - Node.js和npm的关系](https://www.cnblogs.com/minxiang-luo/p/12490526.html)
- [菜鸟教程 - Node.js 安装配置](https://www.runoob.com/nodejs/nodejs-install-setup.html)

然后找个顺眼的文件夹，在该目录下运行以下命令

::: tip 如果不知道运行命令是怎么回事

> 先打开指定的文件夹（explore中），然后选中地址栏（此时默认选中了地址栏中的所有路径，将其覆盖即可），然后输入cmd，回车，便可以打开对应路径的cmd窗口了。

 https://blog.csdn.net/lenfranky/article/details/90177121

:::

其中 npx 是 node.js 的包运行器，node.js 应该会自带，没有的话可以自行百度

```
npx create-docusaurus@latest my-website classic
```

如果想创建其它名字的网站，把上面的`my-website`换成其它名字

创建成功大概会输出这个

```
[SUCCESS] Created my-website.
[INFO] Inside that directory, you can run several commands:

  `npm start`
    Starts the development server.

  `npm run build`
    Bundles your website into static files for production.

  `npm run serve`
    Serves the built website locally.

  `npm deploy`
    Publishes the website to GitHub pages.

We recommend that you begin by typing:

  `cd my-website`
  `npm start`

Happy building awesome websites!
```

这个时候其实网站已经创建好了可以编辑和运行了

::: tip
如果已经创建了但是没有改成想要的名字，可以修改`package.json` 1 处和`package-lock.json` 2 处
:::

cd进去，比如网站名是`my-website`的话就是

```
cd my-website
```

你就可以对网站做一些操作了

比如按照官网说的，启动网站

```
npx docusaurus start
```

成功大概会这样

```
[INFO] Starting the development server...
[SUCCESS] Docusaurus website is running at: http://localhost:3000/

✔ Client
  Compiled successfully in 9.12s

client (webpack 5.73.0) compiled successfully

```

浏览器打开`http://localhost:3000/`后就能看到目前的网站了，默认网站里面会存一些教程

具体怎么修改就不多讲了）官网讲得挺详细的

- [docusaurus.config.js api](https://www.docusaurus.io/zh-CN/docs/api/docusaurus-config)

::: tip

如果是服务器，记得在服务器供应商那里的防火墙放行3000端口，并且找到你服务器的公网ip，在浏览器地址栏里输入"(你的ip):3000"

:::

## github创建仓库

- [docusaurus - 安装流程](https://www.docusaurus.io/zh-CN/docs/installation)

为了使用 vercel 托管，需要一个 github 账号，然后创建一个公共仓库

::: warning

这意味着网站的所有内容，全部代码对所有人都是透明的，务必不要包含隐私信息

:::

注册就不说了，创建仓库的话，图省事可以用github客户端

- [github - 客户端](https://desktop.github.com/)

file -> Add Local repository...(ctrl + O)

![](https://s2.loli.net/2022/07/27/lsaXz2kjYGT3PWu.png)

选择网站文件夹，然后点`create a repository`

![](https://s2.loli.net/2022/07/27/jN8DGhtiukFU7RZ.png)

创建

![](https://s2.loli.net/2022/07/27/Grm93opDaAMzilP.png)

这时候能看到原文件夹出现了`.git`文件夹(如果看不到，可以在文件资源管理器->查看 勾选 `隐藏的项目`)

![](https://s2.loli.net/2022/07/27/8cekhNs4RdjMCTG.png)

发布仓库到github

![](https://s2.loli.net/2022/07/27/p4PqT6Kt9sUGZbA.png)

注意取消勾选`Keep this code private`

![](https://s2.loli.net/2022/07/27/NB8FtS9h1gWZQaL.png)

<details>

<summary>如果已经创建了仓库，更改为私有或公共</summary>

仓库的settings

![](https://s2.loli.net/2022/07/27/f6AdiC5mjKb41Eq.png)

翻到最下面，`Change repository visibility`

![](https://s2.loli.net/2022/07/27/JWVuI8lrxnygqBH.png)

选择你想要的属性并且输入一遍名字以确认

![](https://s2.loli.net/2022/07/27/1DJbNdzg3LSmf7M.png)

</details>

<details>

<summary>如果已经创建了仓库，删除仓库</summary>

仓库的settings

![](https://s2.loli.net/2022/07/27/f6AdiC5mjKb41Eq.png)

翻到最下面，`Delete this repository`

![](https://s2.loli.net/2022/07/27/SLUAE64qVsIo9Ff.png)

输入一遍名字以确认

![](https://s2.loli.net/2022/07/27/BwslLz5IMq6TVGt.png)

客户端这里remove

![](https://s2.loli.net/2022/07/27/YZu6BRhwVv1SPbX.png)

在对应文件夹删除`.git`和`.gitattributes`

![](https://s2.loli.net/2022/07/27/IKnk2QZFxRV9N61.png)

如果提示没权限，可以按`shift`+`Delete`强制删除(注意，这种方式删除的文件不会被放到回收站，需要专门的软件才可能回复)

</details>

然后去 vercel 用 github 账号登陆

## 托管到vercel

- [vercel](https://vercel.com/)

点击 `+ New Project`，如果是手机打开的可能只能看到一个显眼的黑色的`+`按钮，反正就是那个

![](https://s2.loli.net/2022/07/23/ysCfOVPrj4qn2eA.png)

选择你刚刚创建的项目，`import`

![](https://s2.loli.net/2022/07/23/PfoRsyKCnxd9atJ.png)

FRAMEWORK PRESET，也就是预设，有`Docusaurus 2`可选

![](https://s2.loli.net/2022/07/22/QbjedMExum6qkr8.png)

其它不用管，直接创建就是

网站就托管完了，vercel 会提供个可访问的域名供你测试网站，下面是我的网站的样子

![](https://s2.loli.net/2022/07/22/8v1j2ZblaT5nXSo.png)

随后你每次本地更新网站，并且提交到 github 的仓库后，vercel 都能检测到变动，并且更新实际的网站

<details>

<summary>如果出了问题生成失败了</summary>

在项目页面切换到`Deployments`(部署)选项卡，点击最上面的一次记录，或者直接点击项目下面的那一栏

可以以此查看 log 进行 debug

![](https://s2.loli.net/2022/07/23/FlWOU8n1iKTGQdv.png)

![](https://s2.loli.net/2022/07/23/XZhsK7NTkMcrdlt.png)

</details>

## 域名绑定

你可能意识到我的这个网站不是vercel提供的域名

为了使用其它域名进行访问，首先你需要有一个域名

vercel 不是国内的服务器，所以不需要备案，去阿里云或者腾讯云随便什么云买个域名就行，国外的话，似乎 Doman.com 和 NameCheap 比较出名，我的是在Name.com买的））当时以为国内买的域名也要备案，悲

::: warning

不要图便宜去Godaddy买域名，阿里云一个.com域名(只要不是什么特殊的域名)一年续订也只有70左右

https://zhuanlan.zhihu.com/p/339985690

:::

有了域名后去你的项目 -> settings -> Domains

添加域名，然后按照提示操作就行了

## ww

- [Luminous’ Home - 【CDN?】利用Vercel AGA网络加速网站国内访问](https://luotianyi.vc/4801.html)

哇，好np

